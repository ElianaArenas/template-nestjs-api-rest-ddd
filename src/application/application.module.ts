import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health/health.controller';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user.service';
import { InfraestructureModule } from 'src/infraestructure/infraestructure.module';


@Module({
    controllers: [HealthController, UserController],
    providers: [{ provide: 'IUserService', useClass: UserService }],
    imports: [InfraestructureModule]
})

export class ApplicationModule {}
