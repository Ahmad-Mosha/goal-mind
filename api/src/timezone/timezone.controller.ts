import { Controller, Get } from '@nestjs/common';
import { TimezoneService } from './timezone.service';

@Controller('timezone')
export class TimezoneController {
  constructor(private readonly timezoneService: TimezoneService) {}

  @Get()
  getTimezones() {
    return this.timezoneService.getTimezones();
  }
}
