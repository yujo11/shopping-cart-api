import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() createOrderData: CreateOrderDto[]): Promise<Order> {
    return this.ordersService.createOrder(createOrderData);
  }

  @Get('/:id')
  getOrder(@Param('id') id: number): Promise<Order> {
    return this.ordersService.getOrder(id);
  }

  @Get()
  getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAllOrders();
  }
}
