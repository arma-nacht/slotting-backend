
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, ManyToMany } from 'typeorm';
import { Slot } from './slot.entity';


@Entity()
export class SlotLog extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number;

	@Column("datetime")
	time: Date;

	@ManyToOne(type => Slot, slot => slot.logs)
	slot: Slot;
}