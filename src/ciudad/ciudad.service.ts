import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';

@Injectable()
export class CiudadService {
  private ciudades: Ciudad[] = [];

  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>,
  ) {}

  public async getAllRaw(): Promise<Ciudad[]> {
    const datos = await this.ciudadRepository.query('SELECT * FROM ciudad');

    datos.forEach((element) => {
      const ciudad: Ciudad = new Ciudad(element['nombre']);
      this.ciudades.push(ciudad);
    });
    console.log(this.ciudades);
    return this.ciudades;
  }
}
