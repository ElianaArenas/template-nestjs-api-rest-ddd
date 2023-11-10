import { Module, Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo.service';
import { UserRepositoryMongo } from './repositories/user.repository';
import { UserEntity, UserSchema } from './schemas/user.schema';


const providers: Provider[] = [
    {
      provide: 'IUserRepository',
      useClass: UserRepositoryMongo,
    },
  ];
@Module({
  imports: [
    MongooseModule.forFeature([
        { name: UserEntity.name, schema: UserSchema },
    ]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongoService,
    }),
  ],
  providers,
  exports: providers,
})
export class MongoModule {}
