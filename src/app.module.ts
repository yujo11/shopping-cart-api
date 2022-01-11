import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig } from './configs/typeorm.config';
import { CartsController } from './carts/carts.controller';
import { CartsService } from './carts/carts.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeORMConfig),
    ProductsModule,
    CartsModule,
    OrdersModule,
  ],
  controllers: [CartsController, OrdersController, ProductsController],
  providers: [CartsService, OrdersService, ProductsService],
})
export class AppModule {}
