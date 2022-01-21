import { Order } from 'src/orders/entities/Order.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @OneToOne(() => Product)
  @JoinColumn()
  product: Product;

  @ManyToOne(() => Order, (order) => order.carts)
  @JoinColumn()
  order: Order;
}
