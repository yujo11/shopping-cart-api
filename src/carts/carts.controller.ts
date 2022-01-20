import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartsService } from './carts.service';
import { Cart } from './entities/cart.entity';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post('/:productId')
  createCart(@Param('productId') productId: number): Promise<Cart> {
    return this.cartsService.createCart({ productId });
  }

  @Get()
  getAllCarts(): Promise<Cart[]> {
    return this.cartsService.getAllCarts();
  }

  @Delete('/:id')
  deleteCart(@Param('id') id: number): Promise<void> {
    return this.cartsService.deleteCart(id);
  }
}
