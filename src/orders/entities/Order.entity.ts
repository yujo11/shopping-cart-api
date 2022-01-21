import { Cart } from 'src/carts/entities/cart.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @OneToOne(() => Cart)
  @JoinColumn()
  cart: Cart;

  constructor(quantity?: number, cart?: Cart) {
    super();

    this.quantity = quantity || NaN;
    this.cart = cart || new Cart();
  }
}
