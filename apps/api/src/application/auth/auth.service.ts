import { Injectable } from '@nestjs/common';
import { UserService } from '@application/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<any> {
    // TODO: add bcrypt
    const user = await this.usersService.findOne({ email });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return { access_token: this.jwtService.sign(result) };
    }
    return null;
  }
}
