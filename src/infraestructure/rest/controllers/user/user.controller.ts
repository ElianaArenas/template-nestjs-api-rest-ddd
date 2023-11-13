import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { IUserService } from 'src/application/services/iUserService';
import { UserDTO } from '../../dtos';

@Controller('user')
@ApiOkResponse({
    description: 'Successful request',
})
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
export class UserController {
    constructor(
        @Inject('IUserService')
        private readonly userService: IUserService 
    ){}

    
    @ApiOperation({
        summary: 'get all users',
    })
    @Get()
    async findAll() {
        const users = await this.userService.getUsers();
        return { result: users };
    }

    @ApiOperation({
        summary: 'Create a user',
    })
    @Post()
    async create(@Body() user: UserDTO) {
        const userCreated = await this.userService.createUser(user);
        return { result: userCreated };
    }
}
