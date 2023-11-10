import { Module } from '@nestjs/common';
import { OracleModule } from './oracle/oracle.module';
import { MongoModule } from './mongo/mongo.module';

@Module({
    imports: [MongoModule, /*OracleModule*/],
    exports: [MongoModule, /*OracleModule*/],
})
export class DatabasesModule {}
