import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from 'src/products/products.service';
import { CartRepository } from './carts.repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(CartRepository)
    private readonly cartRepository: CartRepository,
    private readonly productsService: ProductsService,
  ) {}

  async createCart({ productId }: CreateCartDto): Promise<Cart> {
    const product = await this.productsService.getProduct(productId);
    const cart = await this.cartRepository.create({ product, quantity: 1 });

    await this.cartRepository.save(cart);

    return cart;
  }

  getAllCarts(): Promise<Cart[]> {
    return this.cartRepository.find();
  }

  async deleteCart(id: number): Promise<void> {
    const result = await this.cartRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException(`Can't find cart item with id ${id}`);
    }
  }
}
