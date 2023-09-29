import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './DTO/CreateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async creatUser(@Body() userData: CreateUserDTO) {
    this.userRepository.save(userData);

    return {
      status: 'usuario criado',
      user: userData,
    };
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}
