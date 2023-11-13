import { Module, forwardRef } from '@nestjs/common';
import { HealthController } from './controllers/health/health.controller';
import { UserController } from './controllers/user/user.controller';
import { ApplicationModule } from 'src/application/application.module';

@Module({
    controllers: [HealthController, UserController],
    imports: [forwardRef(() => 
        ApplicationModule)]
})
export class RestModule {}
