import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { InteractionsService } from './interaction.service';

@Controller('interactions')
export class InteractionsController {
  constructor(private readonly interactionsService: InteractionsService) {}

  @Post()
  create(@Body() body: { drug: string; food: string; severity: string; description?: string }) {
    return this.interactionsService.addInteraction(body);
  }

  @Get()
  findAll() {
    return this.interactionsService.getAllInteractions();
  }

  @Get('/drug/:drugName')
  findByDrug(@Param('drugName') drugName: string) {
    return this.interactionsService.getByDrugName(drugName);
  }

  @Get('/food/:foodName')
  findByFood(@Param('foodName') foodName: string) {
    return this.interactionsService.getByFoodName(foodName);
  }
}
