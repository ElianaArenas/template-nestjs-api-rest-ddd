import { Module, Provider } from '@nestjs/common';
import { HealthController } from './controllers/health/health.controller';
import { AppService } from './services/app.service';

// TODO: Change it for your service providers
const providers: Provider[] = [
    {
      provide: 'IAppService',
      useClass: AppService,
    },
];
@Module({
    controllers: [HealthController],
    providers
})
export class ApplicationModule {}
