import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrugsModule } from './drugs/drugs.module';
import { FoodsModule } from './foods/foods.module';
import { InteractionsModule } from './interactions/interactions.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:76543210@localhost:27017/backend?authSource=admin',
    ),
    DrugsModule,
    FoodsModule,
    InteractionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
