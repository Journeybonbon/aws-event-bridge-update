import { Module } from '@nestjs/common';
import { SlotsService } from './slots.service';
import { SlotsController } from './slots.controller';
import { SlotBuilder } from './slot.builder';

@Module({
  controllers: [SlotsController],
  providers: [SlotsService, SlotBuilder],
})
export class SlotsModule {}
