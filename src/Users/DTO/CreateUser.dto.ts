import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({
    message: 'O nome não pode ser vazio.',
  })
  name: string;

  @IsEmail(null, {
    message: 'Informe um email valido.',
  })
  email: string;

  @MinLength(6, {
    message: 'A senha deve ter ao menos 6 caracteres.',
  })
  password: string;
}
