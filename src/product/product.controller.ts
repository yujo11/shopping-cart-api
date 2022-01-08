import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductRequestDto } from './dto/product.request.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.productService.findById(id);
  }

  @Post()
  create(@Body() todoData: ProductRequestDto) {
    return this.productService.create(todoData);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.productService.deleteById(id);
  }
}
