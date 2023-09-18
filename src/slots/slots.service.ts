import { Inject, Injectable } from '@nestjs/common';
import { SlotBuilder } from './slot.builder';
// import dayjs from 'dayjs';
import * as dayjs from 'dayjs';


@Injectable()
export class SlotsService {

  private today = dayjs();
  private nextMonth = dayjs().add(1, 'month');
  constructor(
    @Inject(SlotBuilder) private builder: SlotBuilder,
  ){}

  findAll() {
    this.builder.setDays(this.today, this.nextMonth);
    const preResservationSlot = this.builder.buildSlots();
    return preResservationSlot
  }

}
