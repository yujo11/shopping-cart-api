import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartsService } from 'src/carts/carts.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrderRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderRepository)
    private readonly orderRepository: OrderRepository,
    private readonly cartsService: CartsService,
  ) {}

  async createOrder({ cartId, quantity }: CreateOrderDto): Promise<Order> {
    const cart = await this.cartsService.getCart(cartId);
    const order = await this.orderRepository.create({ cart, quantity });

    await this.orderRepository.save(order);

    return order;
  }

  getAllOrders(): Promise<Order[]> {
    return this.orderRepository.find();
  }
}
