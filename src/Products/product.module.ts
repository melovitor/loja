import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ProductsRepository } from './products.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsRepository],
})
export class ProductModule {}
