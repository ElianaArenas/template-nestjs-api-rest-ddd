import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { UserDocument, UserEntity, UserModel } from "../schemas/user.schema";
import { MongoRepository } from "./mongo.repository";
import { IUserRepository } from "src/domain/interfaces/repositories/user.repository";


@Injectable()
export class UserRepositoryMongo extends MongoRepository<UserDocument>  implements IUserRepository {    
    constructor(
        @InjectModel(UserEntity.name) private readonly userModel: UserModel,
      ) {
        super(userModel);
      }
}