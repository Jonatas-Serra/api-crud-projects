import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsModule } from './products/products.module'
import 'dotenv/config'

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@crudapp.eiecace.mongodb.net/?retryWrites=true&w=majority`,
    ),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
