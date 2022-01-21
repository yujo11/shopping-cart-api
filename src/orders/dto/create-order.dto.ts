import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrdersDto {
  createOrderDto: CreateOrderDto[];
}

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  cartId: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
