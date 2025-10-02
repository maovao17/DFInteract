import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DrugsService } from './drugs.service';

@Controller('drugs')
export class DrugsController {
  constructor(private readonly drugsService: DrugsService) {}

  @Post()
  addDrug(@Body() body: { name: string, description?: string, sideEffects?: string[] }) {
    return this.drugsService.addDrug(body);
  }

  @Get()
  getAllDrugs() {
    return this.drugsService.getAllDrugs();
  }

  @Get(':name')
  getDrug(@Param('name') name: string) {
    return this.drugsService.getDrugByName(name);
  }
}
