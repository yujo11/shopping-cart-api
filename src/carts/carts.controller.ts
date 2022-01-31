import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './entities/cart.entity';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  createCart(@Body() createCartData: CreateCartDto): Promise<Cart> {
    return this.cartsService.createCart(createCartData);
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
