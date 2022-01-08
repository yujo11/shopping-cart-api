import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductRequestDto {
  @IsNumber()
  price: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  image_url: string;
}
