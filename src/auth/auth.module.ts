import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthService } from './auth.service';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '999999999999999s' },
    }),
  ],
  controllers: [],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [PassportModule, AuthService]
})
export class AuthModule {}
