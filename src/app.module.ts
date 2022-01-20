import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig } from './configs/typeorm.config';
import { ProductsModule } from './products/products.module';

/*

TODO: PRODUCT
- 물품을 조회할 수 있다.
- 물품을 등록할 수 있다.
- 물품을 삭제할 수 있다.

TODO: CARTS
- 카트를 조회할 수 있다.
- 카트에 물품을 추가할 수 있다.
- 카트에 물품을 삭제할 수 있다.

TODO: ORDERS
- 주문을 조회할 수 있다.
- 상세 주문을 조회할 수 있다.
- 주문을 추가할 수 있다.

*/
@Module({
  imports: [TypeOrmModule.forRoot(TypeORMConfig), ProductsModule],
})
export class AppModule {}
