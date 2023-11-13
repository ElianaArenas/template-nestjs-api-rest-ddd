import { User } from "src/domain/entities/user";
import { IBaseRepository } from "./base-repository";

export abstract class IUserRepository extends IBaseRepository<User, string> {}