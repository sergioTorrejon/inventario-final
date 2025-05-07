/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Productos } from './entities';
import { NotificadosCreateDto, SearchDto } from './dtos';
import { PaginationDto } from 'src/common/dtos/pagination/pagination.dto';
import { SortDto } from 'src/common/dtos';


@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Productos)
    private readonly repository: Repository<Productos>,
  ) {}

  //------------CRUD GET ALL WITH PAGINATE------------//
  async getDataFilter( descripcion: string ) {
    const data = await this.repository
    .createQueryBuilder("q")
    .select("q.descripcion", "descripcion")
    .where("q.estado = :estado", { estado: true })
    .where("unaccent(q.descripcion) ilike unaccent('%"+ descripcion +"%')")
    .getRawMany();
    return data
  }

    //GET ALL
    async getAll(paginationDto: any, sortDto:SortDto,dto:SearchDto) {
      console.log('GET ALL',paginationDto )
      console.log('GET ALL',sortDto )
      console.log('GET ALL',dto )
      const query = this.repository.createQueryBuilder('q')
      .where("q.estado = :estado", { estado: true })
      //.orderBy(sortDto.sort, sortDto.order=='asc'?'ASC':'DESC');

      //-----------------------------DESDE AQUI SE REALIZA LAS CONDICIONES-----------------------------
      if(dto.tipoProducto) query.andWhere("q.tipo_producto = :tipoProducto ", { tipoProducto: dto.tipoProducto });
      if(dto.marca) query.andWhere("q.marca = :marca ", { marca: dto.marca});
      if(dto.medida) query.andWhere("q.medida = :medida ", { medida: dto.medida });
      if(dto.modelo) query.andWhere("q.modelo ILIKE :modelo ", { modelo: `%${dto.modelo}%` });
      if(dto.unidad) query.andWhere("q.unidad = :unidad ", { unidad: dto.unidad });
      if(dto.descripcion) query.andWhere("q.descripcion ILIKE :descripcion ", { descripcion: `%${dto.descripcion}%` });
      //-------------------------------------------------------------------------------------------------
      
      const data = await query.select('*').offset((paginationDto.page-1)*paginationDto.limit).limit(paginationDto.limit).getRawMany()
      const count = await query.getCount()
      console.log('GET ALL',data )

      return {data:data,count:count};
    }
  
  async createOne(dto: NotificadosCreateDto) {
    const post = this.repository.create(dto);
    console.log('se creo el siguient registro', post)
    return await this.repository.save(post);
  }

}
