import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  name: string;

  @Column()
  imageUrl: string;

  constructor({
    id,
    price,
    name,
    imageUrl,
  }: {
    id?: number;
    price: number;
    name: string;
    imageUrl: string;
  }) {
    super();

    this.id = id || null;
    this.price = price;
    this.name = name;
    this.imageUrl = imageUrl;
  }
}
