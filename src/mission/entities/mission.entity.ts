
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { Slot } from '../../slot/entities/slot.entity';

@Entity()
export class Mission extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	name: string;

	@Column('int')
	totalSlotCount: number;

	@Column('int')
	availableSlotCount: number;

	@Column()
	isPublished: boolean;

	@OneToMany(type => Slot, slot => slot.mission)
	slots: Array<Slot>;

	
}