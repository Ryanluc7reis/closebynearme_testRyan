import { Inject, Injectable } from '@nestjs/common';
import { S3Service } from 'src/common/modules/aws/aws-s3.service';
import * as sharp from 'sharp';

@Injectable()
export class UploadsService {
  @Inject()
  private readonly s3Service: S3Service;

  async upload(file: any, fileName: string, path: string) {
    const filename = fileName;
    const asset = await sharp(file.buffer).webp().toBuffer();

    await this.s3Service.uploadBufferFile(asset, filename, 'image/webp', path);

    return {
      location: `https://closebynearme.s3.amazonaws.com/${path}/${filename}`,
    };
  }
}
