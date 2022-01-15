import { EntityRepository, Repository } from 'typeorm';
import { Product } from './entites/product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {}
