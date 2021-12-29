import { Module } from '@nestjs/common';
import { UserModule } from '@application/user/user.module';
import { AuthModule } from '@application/auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
