import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './DTO/CreateUser.dto';
import { v4 as uuid } from 'uuid';
import { UserEntity } from './user.entity';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async creatUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();

    userEntity.id = uuid();
    userEntity.name = userData.name;
    userEntity.email = userData.email;
    userEntity.password = userData.password;

    this.userRepository.save(userEntity);

    return {
      status: 'Usuário criado com sucesso!',
      id: userEntity.id,
    };
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}
