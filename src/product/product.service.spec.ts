import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = await service.findAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('findById', () => {
    it('should return a product', async () => {
      service.create({
        price: 10000,
        name: 'chicken',
        imageUrl: 'test.com/chicken',
      });

      const result = await service.findById(1);
      expect(result).toBeDefined();
      expect(result.id).toBe(1);
    });
  });

  describe('deleteById', () => {
    it('should delete a product', async () => {
      service.create({
        price: 10000,
        name: 'chicken',
        imageUrl: 'test.com/chicken',
      });

      await service.deleteById(1);
      const result = await service.findAll();

      expect(result.length).toBe(0);
    });

    it('should throw 404 error', () => {
      try {
        service.deleteById(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toBe('Product with id 1 not found');
      }
    });
  });

  describe('create', () => {
    it('should create a product', async () => {
      await service.create({
        price: 10000,
        name: 'chicken',
        imageUrl: 'test.com/chicken',
      });

      const result = await service.findById(1);

      expect(result).toBeDefined();
      expect(result.id).toBe(1);
    });
  });
});
