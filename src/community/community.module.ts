import { Module } from '@nestjs/common';
import { Community } from './entities/community.entity';
import { Member } from './entities/member.entity';

@Module({})
export class CommunityModule {
	imports: [Community, Member]
}
