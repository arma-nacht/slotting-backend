
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Community } from './community.entity';
import { User } from '../../user/entities/user.entity';
import { Slot } from '../../slot/entities/slot.entity';

@Entity()
export class Member extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	name: string;

	@ManyToOne(type => Community, comm => comm.members)
	community: Array<Community>;

	@OneToOne(type => User, user => user.membership)
	@JoinColumn()
	user?: User;

	@OneToMany(type => Slot, slot => slot.member)
	slots: Array<Slot>;
}