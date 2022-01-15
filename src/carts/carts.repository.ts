import { EntityRepository, Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart> {
  // async createProduct(createProductData: CreateProductDto): Promise<Product> {
  //   const product = this.create({
  //     ...createProductData,
  //   });
  //   await this.save(product);
  //   return product;
  // }
}
