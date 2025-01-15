import { registerEnumType } from '@nestjs/graphql';

export enum FileUploadStatus {
  FILE_COMPLETED = 'FILE_COMPLETED',
  FILE_PROCESSING = 'FILE_PROCESSING',
  NO_PROCESSING = 'NO_PROCESSING',
}

export enum FileUploadStatusAllowed {
  FILE_COMPLETED = 'FILE_COMPLETED',
  FILE_PROCESSING = 'FILE_PROCESSING',
  NO_PROCESSING = 'NO_PROCESSING',
  EMPTY = '',
}

registerEnumType(FileUploadStatus, {
  name: 'FileUploadStatus',
});

registerEnumType(FileUploadStatusAllowed, {
  name: 'FileUploadStatusAllowed',
});
