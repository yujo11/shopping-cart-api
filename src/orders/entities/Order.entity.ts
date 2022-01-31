import { BaseEntity, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderDetail } from './order-detail.entity';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails: OrderDetail[];

  constructor(orderDetails?: OrderDetail[]) {
    super();

    this.orderDetails = orderDetails || [];
  }
}
