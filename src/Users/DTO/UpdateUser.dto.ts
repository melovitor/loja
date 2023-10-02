import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { emailIsUnique } from '../Validation/emailUnique';

export class UpdateUserDTO {
  @IsNotEmpty({
    message: 'O nome não pode ser vazio.',
  })
  @IsOptional()
  name: string;

  @IsEmail(
    {},
    {
      message: 'Informe um email valido.',
    },
  )
  @emailIsUnique({ message: 'usuario já existente' })
  @IsOptional()
  email: string;

  @MinLength(6, {
    message: 'A senha deve ter ao menos 6 caracteres.',
  })
  @IsOptional()
  password: string;
}
