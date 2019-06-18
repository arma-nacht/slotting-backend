import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';

@Module({})
export class UserModule {
	imports: [User]
}
