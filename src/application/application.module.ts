import { Module, Provider } from '@nestjs/common';
import { AppService } from './services/app.service';

// TODO: Change it for your service providers
const providers: Provider[] = [
    {
      provide: 'IAppService',
      useClass: AppService,
    },
];
@Module({
    providers,
    exports: providers,
})
export class ApplicationModule {}
