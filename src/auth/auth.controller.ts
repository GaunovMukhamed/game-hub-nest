import { Body, Controller, Post } from '@nestjs/common';
import { SuccessResponse } from 'src/general.models';
import { LoginInfo } from './login.models';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private _authService: AuthService) {}

	@Post('/')
  loginUser(@Body() { login }: LoginInfo): SuccessResponse {
    return this._authService.login(login);
  }
}
