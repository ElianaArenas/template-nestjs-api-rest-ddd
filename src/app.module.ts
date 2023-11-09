import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';

@Module({  
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
    }),
    ApplicationModule,
    DomainModule,
    InfraestructureModule],
})
export class AppModule {}
