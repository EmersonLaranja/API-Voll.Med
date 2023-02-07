import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Relation } from 'typeorm'
import { Paciente } from './pacienteEntity.js'

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
    id: string

  @Column({ type: 'int' })
    cep: number

  @Column('varchar', { length: 50 })
    rua: string

  @Column({ type: 'int' })
    numero: number

  @Column('varchar', { length: 100 })
    complemento: string

  @OneToOne(() => Paciente, (paciente) => paciente.endereco)
    paciente: Relation<Paciente>
}
