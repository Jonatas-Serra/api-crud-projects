import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductDocument = Product & Document

@Schema({ autoIndex: true })
export class Product {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  price: number

  @Prop()
  quantity: number

  @Prop()
  image: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)
