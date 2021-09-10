import { BaseUserDto } from './base-user.dto';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto extends BaseUserDto {
    _id: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
