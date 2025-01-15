import {
  FileInterceptor,
  StorageFile,
  UploadedFile,
} from '@blazity/nest-file-fastify';
import {
  Controller,
  Post,
  Body,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { UploadsService } from './uploads.service';

@Controller('uploads')
export class UploadsController {
  @Inject()
  private readonly service: UploadsService;

  @Post('images')
  @UseInterceptors(FileInterceptor('asset'))
  async upload(
    @Body()
    data: {
      fileName: string;
      path: string;
    }, // other data that you might want to pass along with the files
    @UploadedFile()
    file: StorageFile,
  ) {
    return await this.service.upload(file, data.fileName, data.path);
  }
}
