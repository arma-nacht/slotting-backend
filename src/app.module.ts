import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissionModule } from './mission/mission.module';
import { SlotModule } from './slot/slot.module';
import { CommunityModule } from './community/community.module';
import { UserModule } from './user/user.module';

import * as config from "config-yml";

@Module({
	imports: [TypeOrmModule.forRoot({
		type: 'mysql',
		host: config['database']['host'],
		port: config['database']['port'],
		username: config['database']['username'],
		password: config['database']['password'],
		database: config['database']['database'],
		entities: [__dirname + '/**/*.entity{.ts,.js}'],
		synchronize: config['database']['synchronize'],
	  }), MissionModule, SlotModule, CommunityModule, UserModule,],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}