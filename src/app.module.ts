import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(TypeORMConfig)],
})
export class AppModule {}
