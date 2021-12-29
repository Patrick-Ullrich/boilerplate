import { DatabaseService } from '@infrastructure/database/database.service';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  providers: [UserService, DatabaseService],
  exports: [UserService],
})
export class UserModule {}
