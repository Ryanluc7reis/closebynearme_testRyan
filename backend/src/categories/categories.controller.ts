import {
  FileInterceptor,
  StorageFile,
  UploadedFile,
} from '@blazity/nest-file-fastify';
import {
  Body,
  Controller,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ObjectId } from 'mongoose';

@Controller('categories')
export class CategoriesController {
  @Inject()
  private readonly service: CategoriesService;

  @Post('upload-csv')
  @UseInterceptors(FileInterceptor('csv'))
  async uploadCsv(
    @Body()
    data: {
      categoryId: ObjectId;
    }, // other data that you might want to pass along with the files
    @UploadedFile()
    file: StorageFile,
  ): Promise<string> {
    await this.service.processCsv(file, data.categoryId);
    return 'Success';
  }
}
