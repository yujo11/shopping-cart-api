import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  name: string;

  @Column()
  imageUrl: string;

  @Column()
  quantity: number;

  constructor(
    name?: string,
    price?: number,
    imageUrl?: string,
    quantity?: number,
  ) {
    super();

    this.name = name || '';
    this.price = price || NaN;
    this.imageUrl = imageUrl || '';
    this.quantity = quantity || 1;
  }
}
