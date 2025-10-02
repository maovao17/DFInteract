import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  create(@Body() body: { name: string, description?: string, sideEffects?: string[] }) {
    return this.foodsService.addFood(body);
  }

  @Get()
  findAll() {
    return this.foodsService.getAllFoods();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.foodsService.getFoodByName(name);
  }
}
