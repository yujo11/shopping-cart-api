import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entites/product.entity';
import { ProductRepository } from '../products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  createProduct(createProductData: CreateProductDto): Promise<Product> {
    return this.productRepository.createProduct(createProductData);
  }

  getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProduct(id: number): Promise<Product> {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException(`Cant't find product with id ${id}`);
    }

    return product;
  }

  async deleteProduct(id: number): Promise<void> {
    const result = await this.productRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException(`Can't find product with id ${id}`);
    }
  }
}
