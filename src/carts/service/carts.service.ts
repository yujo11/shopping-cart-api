import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from 'src/products/service/products.service';
import { CartRepository } from '../carts.repository';
import { Cart } from '../entities/cart.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(CartRepository)
    private readonly cartRepository: CartRepository,
    private readonly productsService: ProductsService,
  ) {}

  getAllCartItems(): Promise<Cart[]> {
    return this.cartRepository.find();
  }

  async createCartItem(productId: number): Promise<Cart> {
    const { name, price, imageUrl } = await this.productsService.getProduct(
      productId,
    );

    const cart = this.cartRepository.create({ name, price, imageUrl });
    await this.cartRepository.save(cart);

    return cart;
  }

  async deleteCartItem(id: number): Promise<void> {
    const result = await this.cartRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException(`Can't find cart with id ${id}`);
    }
  }
}
