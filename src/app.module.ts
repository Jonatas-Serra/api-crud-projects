import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://crudapp:MAvfxBB4INbXvwUA@crudapp.eiecace.mongodb.net/?retryWrites=true&w=majority`,
    ),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
