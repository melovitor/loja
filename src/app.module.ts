import { Module } from '@nestjs/common';
import { UserController } from './user.contoller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
