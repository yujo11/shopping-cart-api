import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartRepository } from './carts.repository';
import { ProductsService } from 'src/products/products.service';
import { ProductRepository } from 'src/products/products.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CartRepository, ProductRepository])],
  providers: [CartsService, ProductsService],
  controllers: [CartsController],
})
export class CartsModule {}
