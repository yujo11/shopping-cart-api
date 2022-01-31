import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartsService } from 'src/carts/carts.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderDetail } from './entities/order-detail.entity';
import { Order } from './entities/order.entity';
import { OrderRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderRepository)
    private readonly orderRepository: OrderRepository,

    private readonly cartsService: CartsService,
  ) {}

  async createOrderDetail(
    cartId: number,
    quantity: number,
  ): Promise<OrderDetail> {
    const cart = await this.cartsService.getCart(cartId);
    const { price, name, imageUrl } = cart.product;
    const orderDetail = new OrderDetail(name, price, imageUrl, quantity);

    return orderDetail;
  }

  async createOrder(createCartData: CreateOrderDto[]): Promise<Order> {
    const orderDetails = await Promise.all(
      createCartData.map(
        async ({ cartId, quantity }) =>
          await this.createOrderDetail(cartId, quantity),
      ),
    );

    const order = await this.orderRepository.create({ orderDetails });

    await this.orderRepository.save(order);

    return order;
  }

  async getOrder(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne(id);

    if (!order) {
      throw new NotFoundException(`Cant't find order with id ${id}`);
    }

    return order;
  }

  getAllOrders(): Promise<Order[]> {
    return this.orderRepository.find();
  }
}
