import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases/databases.module';
import { RestModule } from './rest/rest.module';



@Module({
  imports: [DatabasesModule, RestModule],
  exports: [DatabasesModule, RestModule],
})
export class InfraestructureModule {}
