import { EntityRepository, Repository } from 'typeorm';
import { Order } from './entities/Order.entity';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {}
