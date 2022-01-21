import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  constructor(name?: string, price?: number, imageUrl?: string) {
    super();

    this.name = name || '';
    this.price = price || NaN;
    this.imageUrl = imageUrl || '';
  }
}
