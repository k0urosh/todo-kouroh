import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user information available'
    }

    return {
      message: 'User information:',
      user: req.user
    }
  }
}