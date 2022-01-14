import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig } from './configs/typeorm.config';
import { ProductsController } from './products/controller/products.controller';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/service/products.service';

@Module({
  imports: [TypeOrmModule.forRoot(TypeORMConfig), ProductsModule],
})
export class AppModule {}
