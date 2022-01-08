import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductRequestDto {
  @IsNumber()
  price: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  image_url: string;
}
