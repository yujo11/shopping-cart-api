import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartRepository } from './carts.repository';
import { CartsController } from './controller/carts.controller';
import { CartsService } from './service/carts.service';

@Module({
  imports: [TypeOrmModule.forFeature([CartRepository])],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
