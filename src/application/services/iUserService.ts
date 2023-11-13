import { User } from "src/domain/entities/user";

export abstract class IUserService {
    getUsers: () =>  Promise<any>
    createUser: (user: User)=>  Promise<any>
}