import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderRequestDto } from './dto/order.request.dto';

@Injectable()
export class OrderService {
  private orders = [];

  findAll() {
    return this.orders;
  }

  create(orderData: OrderRequestDto) {
    this.orders.push({
      id: this.orders.length + 1,
      ...orderData,
    });
  }

  findById(id: number) {
    const order = this.orders.find((order) => order.id === id);

    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    return order;
  }

  deleteById(id: number): boolean {
    const order = this.findById(id);

    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    this.orders = this.orders.filter((order) => order.id !== id);

    return true;
  }
}
