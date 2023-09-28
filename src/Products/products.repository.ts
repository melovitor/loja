import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  private products = [];

  async save(product) {
    this.products.push(product);
  }

  async list() {
    return this.products;
  }
}
