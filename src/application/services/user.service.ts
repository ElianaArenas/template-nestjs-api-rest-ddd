import { Inject } from "@nestjs/common";
import { IUserService } from "./iUserService";
import { IUserRepository } from "src/domain/interfaces/repositories/user.repository";
import { User } from "src/domain/entities/user";

export class UserService implements IUserService{
   constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
   ){}
    async createUser(user: User) {
        const newUser = new User(user.name, user.surname, user.email);
        return await this.userRepository.create(newUser);
    }

   async getUsers(){
       return await this.userRepository.findAll();
   }
}