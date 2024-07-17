import { Injectable } from '@nestjs/common';
import { SuccessResponse } from 'src/general.models';

@Injectable()
export class AuthService {

  login(login: string): SuccessResponse {
    return { message: 'success' };
  }
}
