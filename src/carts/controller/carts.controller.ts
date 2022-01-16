import { Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { Cart } from '../entities/cart.entity';
import { CartsService } from '../service/carts.service';

@Controller('customers/carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post('/:id')
  createCartItem(@Param('id') id: number): Promise<Cart> {
    return this.cartsService.createCartItem(id);
  }

  @Get()
  getAllCartItems(): Promise<Cart[]> {
    return this.cartsService.getAllCartItems();
  }

  @Delete('/:id')
  deleteCartItem(@Param('id') id: number): Promise<void> {
    return this.cartsService.deleteCartItem(id);
  }
}
