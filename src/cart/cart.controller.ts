import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartRequestDto } from './dto/cart.request.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Post()
  create(@Body() cartData: CartRequestDto) {
    return this.cartService.create(cartData);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.cartService.deleteById(id);
  }
}
