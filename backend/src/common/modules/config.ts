import { Base64UnEncript } from '../../../libs/base64';

const CONFIG = {
  // ENV && Port
  PORT: process.env.PORT || 4000,
  ENV: process.env.NODE_ENV || 'development',

  // DB
  DB_URI:
    process.env.NODE_ENV === 'production'
      ? Base64UnEncript(process.env.DB_URI) || ''
      : process.env.DB_URI ||
        'mongodb://root:Gjvuvp2geJj@localhost:27017/closebynearmeDB?authSource=admin',
  DB_NAME:
    process.env.NODE_ENV === 'production'
      ? Base64UnEncript(process.env.DB_NAME) || ''
      : process.env.DB_NAME || 'root',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  ADMIN_FRONTEND_URL: process.env.ADMIN_FRONTEND_URL || 'http://localhost:3000',
  // JWT
  // JWT
  JWT_ACCESSTOKEN_SECRET: process.env.JWT_ACCESSTOKEN_SECRET || 'secret',
  JWT_REFRESHTOKEN_SECRET:
    process.env.JWT_REFRESHTOKEN_SECRET || 'refreshSecret',
  JWT_ISSUER: process.env.JWT_ISSUER || 'application',
  JWT_AUDIENCE: process.env.JWT_AUDIENCE || 'public',

  // Redis
  REDIS_URI: process.env.REDIS_URI || 'redis',
  REDIS_NAME:
    process.env.NODE_ENV === 'production'
      ? Base64UnEncript(process.env.REDIS_NAME) || 'ha-redis'
      : process.env.REDIS_NAME || 'Y2xvc2VieW5lYXJtZVJlZGlz',
  REDIS_PORT: process.env.REDIS_PORT || 6379,

  AWS_BUCKET: process.env.AWS_BUCKET || 'testBucket',
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || 'AKIAVXPEDYCA7QNTJ5MK',
  AWS_SECRET_ACCESS_KEY:
    process.env.AWS_SECRET_ACCESS_KEY ||
    '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',
  AWS_REGION: process.env.AWS_REGION || 'us-east-2',
  AWS_URL: process.env.AWS_URL || 'https://closebynearme.s3.amazonaws.com',
};

export default CONFIG;
