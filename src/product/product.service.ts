import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRequestDto } from './dto/product.request.dto';

@Injectable()
export class ProductService {
  private products = [];

  findAll() {
    return this.products;
  }

  findById(id: number) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }

  create(productData: ProductRequestDto) {
    this.products.push({
      id: this.products.length + 1,
      ...productData,
    });
  }

  deleteById(id: number): boolean {
    const product = this.findById(id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    this.products = this.products.filter((product) => product.id !== id);

    return true;
  }
}
