import { Module } from '@nestjs/common';
import { MissionController } from './mission/mission.controller';
import { Mission } from './entities/mission.entity';

@Module({
  imports: [Mission],
  controllers: [MissionController]
})
export class MissionModule {}
