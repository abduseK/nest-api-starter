import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateuserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['Intern', 'Engineer', 'Admin'], {
    message: 'Valid role required',
  })
  role: 'Intern' | 'Engineer' | 'Admin';
}
