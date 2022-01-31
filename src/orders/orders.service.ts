import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartsService } from 'src/carts/carts.service';
import { Cart } from 'src/carts/entities/cart.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { OrderRepository } from './orders.repository';
import { OrderDetailRepository } from './order-detail.repository';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderRepository)
    private readonly orderRepository: OrderRepository,
    @InjectRepository(OrderDetailRepository)
    private readonly orderDetailRepository: OrderDetailRepository,
    private readonly cartsService: CartsService,
  ) {}

  async createOrderDetail(
    cartId: number,
    quantity: number,
  ): Promise<OrderDetail> {
    const cart = await this.cartsService.getCart(cartId);
    const { price, name, imageUrl } = cart.product;
    const orderDetail = await this.orderDetailRepository.create({
      name,
      price,
      imageUrl,
      quantity,
    });

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

    return order;
  }

  async getOrder(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne(id, {
      relations: ['orderDetails'],
    });

    if (!order) {
      throw new NotFoundException(`Cant't find order with id ${id}`);
    }

    return order;
  }

  getAllOrders(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['orderDetails'] });
  }
}
