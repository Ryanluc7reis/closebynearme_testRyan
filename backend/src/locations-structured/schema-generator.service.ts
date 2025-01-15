import { Inject, Injectable } from '@nestjs/common';
import { S3Service } from 'src/common/modules/aws/aws-s3.service';
import { CompaniesService } from 'src/companies/companies.service';
import { LocationsService } from 'src/locations/locations.service';
import { create } from 'xmlbuilder2';
import * as fs from 'fs/promises';
import { MerchantPublishedStatus, StatusAllowed } from '_protos/common';
import * as moment from 'moment';
import { Cron, CronExpression } from '@nestjs/schedule';
import CONFIG from 'src/common/modules/config';
import { ProductsService } from 'src/products/products.service';
import { ObjectId } from 'mongoose';

interface StorageSchema {
  url: string;
  lastmod: string;
}

interface FeedSchema {
  id: string;
  title: string;
  description: string;
  link: string;
  image_link: string;
  availability: string;
  price: string;
  identifier_exists: string;
  condition: string;
  shipping: string;
}

@Injectable()
export class SchemaGeneratorService {
  @Inject()
  private readonly locationService: LocationsService;
  @Inject()
  private readonly companyService: CompaniesService;
  @Inject()
  private readonly productService: ProductsService;
  @Inject()
  private readonly s3Service: S3Service;

  @Cron(CronExpression.EVERY_HOUR)
  async handleCron() {
    if (CONFIG.ENV === 'production') {
      try {
        await this.schemaGenerator();
      } catch (e) {
        console.log(e);
      }

      try {
        await this.schemaFeedGenerator();
      } catch (e) {
        console.log(e);
      }
    }
  }

  async handleCompaniesPublished(
    page: number,
    url_path: string,
    storage: Map<string, FeedSchema>,
  ) {
    const data = await this.companyService.findAll({
      all: false,
      page,
      status: StatusAllowed.ACTIVE,
      perPage: 100,
      q: '',
      merchantListingStatus: [MerchantPublishedStatus.PUBLISHED],
    });

    console.log(
      `Companies Published in total: ${data.totalDocs} ~ Page: ${page} ~ Total Pages: ${data.totalPages} `,
    );

    for await (const item of data.docs) {
      await this.handleProducts(1, item._id, url_path, storage);
    }
    if (data.hasNextPage && data.nextPage) {
      await this.handleCompaniesPublished(data.nextPage, url_path, storage);
    }
  }

  async handleProducts(
    page: number,
    companyId: ObjectId,
    url_path: string,
    storage: Map<string, FeedSchema>,
  ) {
    const data = await this.productService.findAll({
      all: false,
      page,
      status: StatusAllowed.ACTIVE,
      perPage: 50,
      q: '',
      companyId,
    });
    for await (const item of data.docs) {
      // /product/bounce-house-rentals
      const slug = `product/${item.slug}`;
      storage.set(slug, {
        id: String(item._id),
        title: item.name,
        description: item.description,
        link: `${url_path}/${slug}`,
        image_link: item.images[0],
        availability: 'in_stock',
        price: `${item.full_price} USD`,
        identifier_exists: 'no',
        condition: 'new',
        shipping: 'US',
      });
    }
    if (data.hasNextPage && data.nextPage) {
      await this.handleProducts(data.nextPage, companyId, url_path, storage);
    }
  }

  async handleProductsForSchema(
    page: number,
    url_path: string,
    storage: Map<string, StorageSchema>,
  ) {
    const data = await this.productService.findAll({
      all: false,
      page,
      status: StatusAllowed.ACTIVE,
      perPage: 100,
      q: '',
    });

    // console.log(
    //   `Products in total: ${data.totalDocs} ~ Page: ${page} ~ Total Pages: ${data.totalPages} `,
    // );

    for await (const item of data.docs) {
      // /product/bounce-house-rental
      const slug = `product/${item.slug}`;
      storage.set(slug, {
        lastmod: moment(item.updatedAt).format('YYYY-MM-DD'),
        url: `${url_path}/${slug}`,
      });
    }
    if (data.hasNextPage && data.nextPage) {
      await this.handleProductsForSchema(data.nextPage, url_path, storage);
    }
  }

  async handleLocations(
    page: number,
    url_path: string,
    storage: Map<string, StorageSchema>,
  ) {
    const data = await this.locationService.findAll({
      all: false,
      page,
      status: StatusAllowed.ACTIVE,
      perPage: 50,
      q: '',
    });
    // console.log(
    //   `Locations in total: ${data.totalDocs} ~ Page: ${page} ~ Total Pages: ${data.totalPages} `,
    // );
    for await (const item of data.docs) {
      // /city/garland-tx/bounce-house-rentals
      item.categories.forEach((category) => {
        const slug = `city/${item.slug}`;
        storage.set(`${slug}/${category.slug}`, {
          lastmod: moment(item.updatedAt).format('YYYY-MM-DD'),
          url: `${url_path}/${slug}/${category.slug}`,
        });
      });
    }
    if (data.hasNextPage && data.nextPage) {
      await this.handleLocations(data.nextPage, url_path, storage);
    }
  }

  async handleCompanies(
    page: number,
    url_path: string,
    storage: Map<string, StorageSchema>,
  ) {
    const data = await this.companyService.findAll({
      all: false,
      page,
      status: StatusAllowed.ACTIVE,
      perPage: 100,
      q: '',
      merchantListingStatus: [
        MerchantPublishedStatus.NOT_LISTING,
        MerchantPublishedStatus.PUBLISHED,
      ],
    });

    // console.log(
    //   `Companies in total: ${data.totalDocs} ~ Page: ${page} ~ Total Pages: ${data.totalPages} `,
    // );

    for await (const item of data.docs) {
      // /city/garland-tx/bounce-house-rentals/gremlins-jump-n-play
      item.categories.forEach((category) => {
        const slug = `city/${item.locationSlug}`;
        storage.set(`${slug}/${category.slug}/${item.slug}`, {
          lastmod: moment(item.updatedAt).format('YYYY-MM-DD'),
          url: `${url_path}/${slug}/${category.slug}/${item.slug}`,
        });
      });
    }
    if (data.hasNextPage && data.nextPage) {
      await this.handleCompanies(data.nextPage, url_path, storage);
    }
  }

  async schemaGenerator() {
    const url_path = 'https://closebynearme.com';

    const path = 'sitemap.xml';
    const root = create()
      .ele('urlset', {
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
      })
      .ele('url')
      .ele('loc')
      .txt(url_path)
      .up()
      .ele('lastmod')
      .txt(moment(new Date()).format('YYYY-MM-DD'))
      .up()
      .ele('changefreq')
      .txt('daily')
      .up()
      .ele('priority')
      .txt('1')
      .up()
      .up();

    const dataToRender = new Map<string, StorageSchema>();

    await this.handleLocations(1, url_path, dataToRender);
    await this.handleCompanies(1, url_path, dataToRender);
    await this.handleProductsForSchema(1, url_path, dataToRender);

    for await (const item of [...dataToRender.values()]) {
      root
        .ele('url')
        .ele('loc')
        .txt(item.url)
        .up()
        .ele('lastmod')
        .txt(item.lastmod)
        .up()
        .ele('changefreq')
        .txt('daily')
        .up()
        .ele('priority')
        .txt('0.7')
        .up()
        .up();
    }

    const xml = root.end({ prettyPrint: true });

    await fs.writeFile(path, Buffer.from(xml));

    await this.s3Service.uploadFileSchema(path, 'sitemap/sitemap.xml');
    console.log('Done uploading sitemap');
    return 'Done';
  }

  async schemaFeedGenerator() {
    const url_path = 'https://closebynearme.com';
    const title_path = 'Close by near me';
    const description_path = 'Close by near me';

    const path = 'merchant_feed.xml';
    const root = create({
      encoding: 'utf-8',
      version: '1.0',
    })
      .ele('rss', {
        version: '2.0',
        'xmlns:g': 'http://base.google.com/ns/1.0',
      })
      .ele('channel')
      .ele('title')
      .txt(title_path)
      .up()
      .ele('description')
      .txt(description_path)
      .up()
      .ele('link')
      .txt(url_path)
      .up();

    const dataToRender = new Map<string, FeedSchema>();

    await this.handleCompaniesPublished(1, url_path, dataToRender);

    for await (const item of [...dataToRender.values()]) {
      root
        .ele('item')
        .ele('g:id')
        .txt(item.id)
        .up()
        .ele('title')
        .txt(item.title)
        .up()
        .ele('description')
        .txt(item.description)
        .up()
        .ele('link')
        .txt(item.link)
        .up()
        .ele('g:image_link')
        .txt(item.image_link)
        .up()
        .ele('g:availability')
        .txt(item.availability)
        .up()
        .ele('g:price')
        .txt(item.price)
        .up()
        .ele('g:identifier_exists')
        .txt(item.identifier_exists)
        .up()
        .ele('g:condition')
        .txt(item.condition)
        .up()
        .ele('g:shipping')
        .ele('g:country')
        .txt(item.shipping)
        .up()
        .up()
        .up();
    }

    const xml = root.end({ prettyPrint: true });

    await fs.writeFile(path, Buffer.from(xml));

    await this.s3Service.uploadFileSchema(path, 'merchant_feed/feed.xml');
    console.log('Done uploading merchant feed');
    return 'Done';
  }
}
