import { User } from "src/domain/entities/user";
import { IBaseRepository } from "./base-repository";

export interface IUserRepository extends IBaseRepository<User, string> {}