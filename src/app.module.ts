import { Module } from '@nestjs/common';
import { UserModule } from './Users/user.module';
import { ProductModule } from './Products/product.module';

@Module({
  imports: [UserModule, ProductModule],
})
export class AppModule {}
