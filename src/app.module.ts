import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsModule } from './carts/carts.module';
import { TypeORMConfig } from './configs/typeorm.config';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeORMConfig), ProductsModule, CartsModule, OrdersModule],
})
export class AppModule {}
