import { Injectable, NotFoundException } from '@nestjs/common';
import { CartRequestDto } from './dto/cart.request.dto';

@Injectable()
export class CartService {
  private carts = [];

  findAll() {
    return this.carts;
  }

  create(cartData: CartRequestDto) {
    this.carts.push({
      id: this.carts.length + 1,
      ...cartData,
    });
  }

  findById(id: number) {
    const cart = this.carts.find((cart) => cart.id === id);

    if (!cart) {
      throw new NotFoundException(`Cart with id ${id} not found`);
    }

    return cart;
  }

  deleteById(id: number): boolean {
    const cart = this.findById(id);

    if (!cart) {
      throw new NotFoundException(`Cart with id ${id} not found`);
    }

    this.carts = this.carts.filter((cart) => cart.id !== id);

    return true;
  }
}
