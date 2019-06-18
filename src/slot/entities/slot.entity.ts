
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Mission } from '../../mission/entities/mission.entity';
import { Community } from '../../community/entities/community.entity';
import { Member } from '../../community/entities/member.entity';
import { SlotLog } from './slot-log.entity';

export enum SlotStatus {
	STATUS_AVAILABLE,
	STATUS_TAKEN,
	STATUS_RESERVED,
	STATUS_CLOSED,
}

@Entity()
export class Slot extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	name: string;

	@ManyToOne(type => Mission, mission => mission.slots)
	mission: Mission;

	@ManyToMany(type => Community, comm => comm.slots)
	reservedFor?: Array<Community>;

	@ManyToOne(type => Member, member => member.slots)
	member?: Member

	@OneToMany(type => SlotLog, log => log.slot)
	logs: Array<SlotLog>
}