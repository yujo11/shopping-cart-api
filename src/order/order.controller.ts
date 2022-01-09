import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderRequestDto } from './dto/order.request.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.orderService.findById(id);
  }

  @Post()
  create(@Body() orderData: OrderRequestDto) {
    return this.orderService.create(orderData);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.orderService.deleteById(id);
  }
}
