import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OracleService } from './oracle.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: OracleService,
    }),
  ],
})
export class OracleModule {}
