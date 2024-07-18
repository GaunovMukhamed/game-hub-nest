import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SuccessResponse } from 'src/general.models';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private _userModel: Model<User>,
  ) {}

  async login(login: string): Promise<SuccessResponse> {
    const foundUser: User | undefined = (await this._userModel.find({ login }).exec())[0]??undefined;
    if(foundUser) {
      return { message: 'Вы успешно авторизованы' }
    } else {
      throw new UnauthorizedException('Пользователь не существует');
    }
  }
}
