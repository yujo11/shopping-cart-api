import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [CartModule, OrderModule, ProductModule],
  controllers: [
    AppController,
    CartController,
    ProductController,
    OrderController,
  ],
  providers: [AppService, CartService, ProductService, OrderService],
})
export class AppModule {}
