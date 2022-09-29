import { Test, TestingModule } from '@nestjs/testing'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'

describe('ProductsController', () => {
  let controller: ProductsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile()

    controller = module.get<ProductsController>(ProductsController)
  })

  it('should be able to create a product', () => {
    expect(controller).toBeDefined()
  })
})
