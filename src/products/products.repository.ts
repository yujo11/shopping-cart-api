import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entites/product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async createProduct(createProductData: CreateProductDto): Promise<Product> {
    const product = this.create({
      ...createProductData,
    });

    await this.save(product);
    return product;
  }
}
