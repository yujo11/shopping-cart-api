import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderDetail } from './order-detail.entity';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('simple-json')
  orderDetails: OrderDetail[];

  constructor(orderDetails?: OrderDetail[]) {
    super();

    this.orderDetails = orderDetails || [];
  }
}
