import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AppService {
  constructor(private authService: AuthService){}
  googleLogin(req) {
    if (!req.user) {
      return 'No user information available'
    }
    const accessToken = this.authService.loginToken(req.user.email)
    return {
      message: 'User access token',
      user: req.user,
      jwtToken: accessToken.access_token,
    }
  }
}