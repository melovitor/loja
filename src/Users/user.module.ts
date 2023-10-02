import { Module } from '@nestjs/common';
import { UserController } from './user.contoller';
import { UserRepository } from './user.repository';
import { emailUniqueValidator } from './Validation/emailUnique';

@Module({
  controllers: [UserController],
  providers: [UserRepository, emailUniqueValidator],
})
export class UserModule {}
