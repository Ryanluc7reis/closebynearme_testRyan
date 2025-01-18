"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Service = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const client_s3_1 = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");
let S3Service = class S3Service {
    constructor() {
        this.bucketName = config_1.default.AWS_BUCKET;
        this.region = config_1.default.AWS_REGION;
        this.region = config_1.default.AWS_REGION;
        this.s3Client = new client_s3_1.S3Client({ region: this.region });
    }
    async parseUrl(key) {
        return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${key}`;
    }
    async uploadFile(filePath) {
        const fileStream = fs.createReadStream(filePath);
        fileStream.on('error', function (err) {
            console.log('File error', err);
        });
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucketName,
            Key: path.basename(filePath),
            Body: fileStream,
        });
        try {
            await this.s3Client.send(command);
            return this.parseUrl(command.input.Key);
        }
        catch (err) {
            throw err;
        }
    }
    async uploadFileSchema(filePath, Key) {
        const fileStream = fs.createReadStream(filePath);
        fileStream.on('error', function (err) {
            console.log('File error', err);
        });
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucketName,
            Key: Key || path.basename(filePath),
            Body: fileStream,
        });
        try {
            await this.s3Client.send(command);
            return this.parseUrl(command.input.Key);
        }
        catch (err) {
            throw err;
        }
    }
    async uploadBase64File(base64, id, path) {
        const buf = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucketName,
            Key: `${path ?? ''}${Date.now()}-${id}`,
            Body: buf,
            ContentType: 'image/jpeg',
        });
        try {
            await this.s3Client.send(command);
            return this.parseUrl(command.input.Key);
        }
        catch (err) {
            throw err;
        }
    }
    async uploadBufferFile(buffer, filename, ContentType, path) {
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucketName,
            Key: `${path ?? ''}/${filename}`,
            Body: buffer,
            ACL: 'public-read',
            ContentType,
        });
        try {
            await this.s3Client.send(command);
            return this.parseUrl(command.input.Key);
        }
        catch (err) {
            throw err;
        }
    }
    async getObject(path) {
        const command = new client_s3_1.GetObjectCommand({
            Bucket: this.bucketName,
            Key: path,
        });
        try {
            const response = await this.s3Client.send(command);
            const stream = response.Body;
            return new Promise((resolve, reject) => {
                const chunks = [];
                stream.on('data', (chunk) => chunks.push(chunk));
                stream.once('end', () => resolve(Buffer.concat(chunks)));
                stream.once('error', reject);
            });
        }
        catch (err) {
            console.error(err);
        }
    }
    async listObjects() {
        const command = new client_s3_1.ListObjectsV2Command({
            Bucket: this.bucketName,
            MaxKeys: 20,
        });
        try {
            let isTruncated = true;
            console.log('Your bucket contains the following objects:\n');
            let contents = '';
            while (isTruncated) {
                const { Contents, IsTruncated, NextContinuationToken } = await this.s3Client.send(command);
                const contentsList = Contents.map((c) => ` • ${c.Key}`).join('\n');
                contents += contentsList + '\n';
                isTruncated = IsTruncated;
                command.input.ContinuationToken = NextContinuationToken;
            }
            return contents;
        }
        catch (err) {
            console.error(err);
        }
    }
    async deleteObject(key) {
        const command = new client_s3_1.DeleteObjectCommand({
            Bucket: this.bucketName,
            Key: key,
        });
        try {
            const response = await this.s3Client.send(command);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    isValidHttpUrl(base64) {
        let url;
        try {
            url = new URL(base64);
        }
        catch (_) {
            return false;
        }
        return url.protocol === 'http:' || url.protocol === 'https:';
    }
};
exports.S3Service = S3Service;
exports.S3Service = S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3Service);
//# sourceMappingURL=aws-s3.service.js.map