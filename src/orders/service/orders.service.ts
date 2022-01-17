import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartsService } from 'src/carts/service/carts.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import { Order } from '../entities/order.entity';
import { OrderDetailRepository } from '../order-detail.repository';
import { OrderRepository } from '../order.repository';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderRepository)
    private readonly orderRepository: OrderRepository,
    @InjectRepository(OrderDetailRepository)
    private readonly orderDetailRepository: OrderDetailRepository,
    private readonly cartsService: CartsService,
  ) {}

  async createOrder({ cartId, quantity }: CreateOrderDto): Promise<Order> {
    // const cart = this.cartsService.getAllCartItems();
    // const order = this.orderRepository.create(createOrderData);
    // await this.orderRepository.save(order);
    // return order;
  }

  getAllOrders(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  async getOrder(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne(id);

    if (!order) {
      throw new NotFoundException(`Cant't find order with id ${id}`);
    }

    return order;
  }
}
