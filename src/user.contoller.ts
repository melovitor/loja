import { Body, Controller, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  private userRepository = new UserRepository();

  @Post()
  async creatUser(@Body() userData) {
    this.userRepository.save(userData);

    return {
      status: 'usuario criado',
      user: userData,
    };
  }
}
