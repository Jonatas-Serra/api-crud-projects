import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jonatas:sVQa6Ea6t9ADT90J@cluster0.j29ist0.mongodb.net/?retryWrites=true&w=majority',
    ),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
