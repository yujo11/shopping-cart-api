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
}
