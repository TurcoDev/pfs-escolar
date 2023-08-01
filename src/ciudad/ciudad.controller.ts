import { CiudadService } from './ciudad.service';
import { Controller, Get } from '@nestjs/common';

@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Get()
  getCitys(): string {
    return this.ciudadService.getAllRaw().toString();
  }
}
