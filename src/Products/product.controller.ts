import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { CreateProductDTO } from './DTO/CreateProduct.dto';

@Controller('/products')
export class ProductsController {
  constructor(private productsRepository: ProductsRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    return this.productsRepository.save(productData);
  }

  @Get()
  async listUsers() {
    return this.productsRepository.list();
  }
}
