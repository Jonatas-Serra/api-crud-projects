import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ProductDocument, Product } from './entities/product.entity'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const createdProduct = new this.productModel(createProductDto)
    return createdProduct.save()
  }

  findAll() {
    return this.productModel.find().exec()
  }

  findOne(id: string) {
    return this.productModel.findById(id)
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto)
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id)
  }
}
