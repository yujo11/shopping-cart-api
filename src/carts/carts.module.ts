import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from 'src/products/products.repository';
import { ProductsService } from 'src/products/products.service';
import { CartsController } from './carts.controller';
import { CartRepository } from './carts.repository';
import { CartsService } from './carts.service';

@Module({
  imports: [TypeOrmModule.forFeature([CartRepository, ProductRepository])],
  providers: [CartsService, ProductsService],
  controllers: [CartsController],
})
export class CartsModule {}
