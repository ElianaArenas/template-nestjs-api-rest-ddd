import { InjectModel } from "@nestjs/mongoose";
import { UserDocument, UserEntity, UserModel } from "../schemas/user.schema";
import { MongoRepository } from "./mongo.repository";
import { IUserRepository } from "src/domain/interfaces/repositories/user.repository";

export class UserRepositoryMongo extends MongoRepository<UserDocument>  implements IUserRepository {    
    constructor(
        @InjectModel(UserEntity.name) private readonly userModel: UserModel,
      ) {
        super(userModel);
      }
}