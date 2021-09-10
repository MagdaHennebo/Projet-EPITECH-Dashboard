import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
      const user = await this.userService.findByUsername(username);
      console.log(user);
      const result = bcrypt.compareSync(password, user['password']);
      if (result == false) {
        throw new UnauthorizedException();
      } 
      return user;
    }

    async login(user: any) {
        const payload = { username: user.username, userId: user._id };
        console.log(payload);
        return {
          access_token: this.jwtService.sign(payload),
          userId: user._id,
          username: user.username
        };
    }
}
