import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsController } from './carts/carts.controller';
import { CartsModule } from './carts/carts.module';
import { CartsService } from './carts/carts.service';
import { TypeORMConfig } from './configs/typeorm.config';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { OrdersService } from './orders/orders.service';
import { ProductsController } from './products/controller/products.controller';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/service/products.service';

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
