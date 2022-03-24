import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ){}

  loginToken(userEmail) {
    const payload = { email: userEmail};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}