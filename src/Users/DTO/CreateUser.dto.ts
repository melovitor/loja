import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { emailIsUnique } from '../Validation/emailUnique';

export class CreateUserDTO {
  @IsNotEmpty({
    message: 'O nome não pode ser vazio.',
  })
  name: string;

  @IsEmail(
    {},
    {
      message: 'Informe um email valido.',
    },
  )
  @emailIsUnique({ message: 'usuario já existente' })
  email: string;

  @MinLength(6, {
    message: 'A senha deve ter ao menos 6 caracteres.',
  })
  password: string;
}
