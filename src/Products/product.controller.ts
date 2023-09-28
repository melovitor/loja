import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Controller('/products')
export class ProductsController {
  constructor(private productsRepository: ProductsRepository) {}

  @Post()
  async createProduct(@Body() productData) {
    this.productsRepository.save(productData);

    return {
      status: 'Produto criado',
      data: productData,
    };
  }

  @Get()
  async listUsers() {
    return this.productsRepository.list();
  }
}
