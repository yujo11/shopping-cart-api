import { Cart } from 'src/carts/entities/cart.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @OneToMany(() => Cart, (cart) => cart.order)
  carts: Cart[];

  // constructor(quantity?: number, cart?: Cart) {
  //   super();

  //   this.quantity = quantity || NaN;
  //   this.cart = cart || new Cart();
  // }
}
