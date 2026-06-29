import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserLoggers } from './user.logger';

@Module({
  controllers: [UserController],
  providers: [UserService, UserLoggers],
})
export class UserModule {}
