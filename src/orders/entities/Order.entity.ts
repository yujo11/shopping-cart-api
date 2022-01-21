import { Cart } from 'src/carts/entities/cart.entity';
import {
  BaseEntity,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Cart, (cart) => cart.order)
  @JoinColumn()
  carts: Cart[];
}
