import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions } from '@nestjs/mongoose';

@Injectable()
export class MongoService {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: process.env.MONGO_URI,
      auth: {
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD,
      },
      dbName: process.env.MONGO_DATABASE_NAME,
      connectTimeoutMS: Number(process.env.MONGO_CONNECT_TIMEOUT), 
      serverSelectionTimeoutMS: Number(process.env.MONGO_SERVER_SELECTION_TIMEOUT),
      maxIdleTimeMS: Number(process.env.MONGO_MAX_ID_LETIME),
      maxPoolSize: Number(process.env.MONGO_MAX_POOL_SIZE),
      minPoolSize: Number(process.env.MONGO_MIN_POOL_SIZE),
      retryAttempts: 2
    };
  }
}