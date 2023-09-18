import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SlotsService } from './slots.service';

@Controller('slots')
export class SlotsController {
  constructor(private readonly slotsService: SlotsService) {}
  
  @Get()
  findAll() {
    return this.slotsService.findAll();
  }

}
