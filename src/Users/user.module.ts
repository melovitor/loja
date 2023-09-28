import { Module } from '@nestjs/common';
import { UserController } from './user.contoller';

@Module({
  controllers: [UserController],
})
export class UserModule {}
