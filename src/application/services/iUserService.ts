import { User } from "src/domain/entities/user";

export interface IUserService {
    getUsers(): Promise<any>;
    createUser(user: User): Promise<any>;
}