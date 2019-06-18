
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Community } from '../../community/entities/community.entity';
import { Member } from '../../community/entities/member.entity';

@Entity()
export class User extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	name: string;

	@ManyToOne(type => Community, comm => comm.users)
	community?: Community;

	@OneToOne(type => Member, member => member.user)
	@JoinColumn()
	membership?: Member;
}