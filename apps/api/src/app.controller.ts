import { AuthService } from '@application/auth/auth.service';
import { UserService } from '@application/user/user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('user')
  async signupUser(
    @Body() userData: { email: string; password: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Post('login')
  async login(
    @Body() userData: { email: string; password: string },
  ): Promise<UserModel> {
    return this.authService.login(userData.email, userData.password);
  }

  @Get()
  async getHello(): Promise<string> {
    return 'Hello World!';
  }

  @UseGuards(JwtAuthGuard)
  @Get('/private')
  async getPrivate(@Request() req): Promise<string> {
    return 'This is a private message for' + req.user.email;
  }
}
