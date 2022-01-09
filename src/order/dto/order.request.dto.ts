import { IsNumber } from 'class-validator';

export class OrderRequestDto {
  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;
}
