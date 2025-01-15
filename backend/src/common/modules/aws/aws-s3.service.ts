import { Injectable } from '@nestjs/common';
import config from '../config';
import AWS_S3, {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import * as fs from 'fs';
import * as path from 'path';
import { ObjectId } from 'mongoose';
import type { Readable } from 'stream';

@Injectable()
export class S3Service {
  bucketName = config.AWS_BUCKET;
  region = config.AWS_REGION;
  s3Client: S3Client;

  constructor() {
    this.region = config.AWS_REGION;
    // AWS.config.update({
    //   region: this.region,
    // });
    // AWS.config.getCredentials(function (err) {
    // });

    this.s3Client = new S3Client({ region: this.region });
  }

  async parseUrl(key: string) {
    return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${key}`;
  }

  async uploadFile(filePath: string) {
    const fileStream = fs.createReadStream(filePath);
    fileStream.on('error', function (err) {
      console.log('File error', err);
    });
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: path.basename(filePath),
      Body: fileStream,
    });

    try {
      await this.s3Client.send(command);
      return this.parseUrl(command.input.Key);
    } catch (err) {
      throw err;
    }
  }

  async uploadFileSchema(filePath: string, Key: string) {
    const fileStream = fs.createReadStream(filePath);
    fileStream.on('error', function (err) {
      console.log('File error', err);
    });
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: Key || path.basename(filePath),
      Body: fileStream,
    });

    try {
      await this.s3Client.send(command);
      return this.parseUrl(command.input.Key);
    } catch (err) {
      throw err;
    }
  }

  async uploadBase64File(
    base64: string,
    id: ObjectId | string,
    path?: string,
  ): Promise<string> {
    const buf = Buffer.from(
      base64.replace(/^data:image\/\w+;base64,/, ''),
      'base64',
    );

    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: `${path ?? ''}${Date.now()}-${id}`,
      Body: buf,
      ContentType: 'image/jpeg',
    });

    try {
      await this.s3Client.send(command);
      return this.parseUrl(command.input.Key);
    } catch (err) {
      throw err;
    }
  }

  async uploadBufferFile(
    buffer: Buffer,
    filename: string,
    ContentType?: string,
    path?: string,
  ): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: `${path ?? ''}/${filename}`,
      Body: buffer,
      ACL: 'public-read',
      ContentType,
    });

    try {
      await this.s3Client.send(command);
      return this.parseUrl(command.input.Key);
    } catch (err) {
      throw err;
    }
  }

  async getObject(path: string) {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: path,
    });

    try {
      const response = await this.s3Client.send(command);
      const stream = response.Body as Readable;
      return new Promise<Buffer>((resolve, reject) => {
        const chunks: Buffer[] = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.once('end', () => resolve(Buffer.concat(chunks)));
        stream.once('error', reject);
      });
    } catch (err) {
      console.error(err);
    }
  }

  async listObjects() {
    const command = new ListObjectsV2Command({
      Bucket: this.bucketName,
      // The default and maximum number of keys returned is 1000. This limits it to
      // one for demonstration purposes.
      MaxKeys: 20,
    });

    try {
      let isTruncated = true;

      console.log('Your bucket contains the following objects:\n');
      let contents = '';

      while (isTruncated) {
        const { Contents, IsTruncated, NextContinuationToken } =
          await this.s3Client.send(command);
        const contentsList = Contents.map((c) => ` • ${c.Key}`).join('\n');
        contents += contentsList + '\n';
        isTruncated = IsTruncated;
        command.input.ContinuationToken = NextContinuationToken;
      }
      return contents;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteObject(key: string): Promise<AWS_S3.DeleteObjectCommandOutput> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });

    try {
      const response = await this.s3Client.send(command);
      return response;
    } catch (err) {
      throw err;
    }
  }

  isValidHttpUrl(base64: string) {
    let url: URL;
    try {
      url = new URL(base64);
    } catch (_) {
      return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
  }
}
