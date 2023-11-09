import { Module } from '@nestjs/common';
import { RestModule } from './rest/rest.module';
import { DatabasesModule } from './databases/databases.module';


@Module({
  imports: [RestModule, DatabasesModule]
})
export class InfraestructureModule {}
