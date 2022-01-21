import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig } from './configs/typeorm.config';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { OrdersModule } from './orders/orders.module';

/*

TODO: PRODUCT
- [o] 물품을 조회할 수 있다.
- [o] 물품을 등록할 수 있다.
- [o] 물품을 삭제할 수 있다.

TODO: CARTS
- [o] 카트를 조회할 수 있다.
- FIXME: 카트에 물품을 추가할 수 있다.
- [o] 카트에 물품을 삭제할 수 있다.

TODO: ORDERS
- [o] 주문을 조회할 수 있다.
- FIXME: 상세 주문을 조회할 수 있다.
- FIXME: 주문을 추가할 수 있다.

*/
@Module({
  imports: [
    TypeOrmModule.forRoot(TypeORMConfig),
    ProductsModule,
    CartsModule,
    OrdersModule,
  ],
})
export class AppModule {}
