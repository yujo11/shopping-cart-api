import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsModule } from './carts/carts.module';
import { TypeORMConfig } from './configs/typeorm.config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeORMConfig), ProductsModule, CartsModule],
})
export class AppModule {}
