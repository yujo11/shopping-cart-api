import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entites/product.entity';
import { ProductsService } from './products.service';

const dummyProducts = [
  { id: 1, price: 10000, name: 'test', imageUrl: 'www.test.com' },
  {
    id: 2,
    price: 1000,
    name: 'test1',
    imageUrl: 'test.com',
  },
];

const dummyProduct = {
  id: 1,
  price: 10000,
  name: 'test',
  imageUrl: 'www.test.com',
};

describe('ProductsService', () => {
  let service: ProductsService;
  let repo: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(Product),
          useValue: {
            find: jest.fn().mockResolvedValue(dummyProducts),
            findOne: jest.fn().mockResolvedValue(dummyProduct),
            create: jest.fn().mockReturnValue(dummyProduct),
            save: jest.fn(),
            update: jest.fn().mockResolvedValue(true),
            delete: jest.fn().mockResolvedValue(true),
          },
        },
        ProductsService,
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repo = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repo).toBeDefined();
  });

  // describe('getAllProducts', () => {
  //   it('should return an array of products', async () => {
  //     const cats = await service.getAllProducts();
  //     expect(cats).toEqual(dummyProducts);
  //   });
  // });
});
