
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToMany } from 'typeorm';
import { Slot } from '../../slot/entities/slot.entity';
import { Member } from './member.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Community extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	name: string;

	@Column({ length: 30 })
	slug: string;

	@OneToMany(type => Member, m => m.community)
	members: Array<Member>;

	@OneToMany(type => User, user => user.community)
	users: Array<User>;


	@ManyToMany(type => Slot, slot => slot.reservedFor)
	slots: Array<Slot>;
}