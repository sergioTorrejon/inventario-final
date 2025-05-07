import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('productos')
export class Productos {

  /* ID */
  @PrimaryGeneratedColumn()
  id: number;

  
  /* COLUMNS */
  @Column({ type: 'varchar', name:'tipo_producto', length: 254 })
  tipoProducto: string;

  @Column({ type: 'varchar', length: 254 })
  marca: string;
  
  @Column({ type: 'varchar', length: 254 })
  medida: string;  

  @Column({ type: 'varchar', length: 254 })
  modelo: string;  

  @Column({ type: 'varchar', name:'unidad', length: 254 })
  unidad: string;  

  @Column({ type: 'varchar', length: 254 })
  descripcion: string;
  

  /* ACTIVE */
  @Column({ type: 'bool', default: true })
  estado: boolean;


  /* AUDIT TABLE */
  @Column({ type: 'varchar', length: 50, default: 'Admin' })
  usuario_creacion: string;

  @CreateDateColumn({ name: 'fecha_creacion', type: 'timestamp' })
  fecha_creacion: Date;

  @Column({ type: 'varchar', length: 50, default: 'Admin' })
  usuario_modificacion: string;

  @UpdateDateColumn({ name: 'fecha_modificacion', type: 'timestamp' })
  fecha_modificacion: Date;
}