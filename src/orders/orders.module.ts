import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartRepository } from 'src/carts/carts.repository';
import { CartsService } from 'src/carts/carts.service';
import { ProductRepository } from 'src/products/products.repository';
import { ProductsService } from 'src/products/products.service';
import { OrderDetailRepository } from './order-detail.repository';
import { OrdersController } from './orders.controller';
import { OrderRepository } from './orders.repository';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderRepository,
      OrderDetailRepository,
      CartRepository,
      ProductRepository,
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, CartsService, ProductsService],
})
export class OrdersModule {}
