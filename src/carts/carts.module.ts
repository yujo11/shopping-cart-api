import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from 'src/products/products.module';
import { ProductRepository } from 'src/products/products.repository';
import { ProductsService } from 'src/products/service/products.service';
import { CartRepository } from './carts.repository';
import { CartsController } from './controller/carts.controller';
import { CartsService } from './service/carts.service';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([CartRepository, ProductRepository]),
  ],
  controllers: [CartsController],
  providers: [CartsService, ProductsService],
})
export class CartsModule {}
