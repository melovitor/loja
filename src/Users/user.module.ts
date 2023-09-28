import { Module } from '@nestjs/common';
import { UserController } from './user.contoller';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserRepository],
})
export class UserModule {}
