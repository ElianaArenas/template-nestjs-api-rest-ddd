import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './services/user.service';
import { InfraestructureModule } from 'src/infraestructure/infraestructure.module';

const providers = [{ provide: 'IUserService', useClass: UserService }];

@Module({
    providers,
    exports: providers,
    imports: [forwardRef(() =>InfraestructureModule)]
})

export class ApplicationModule {}
