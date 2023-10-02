import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

class FeatureProductDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  name: string;

  @IsNotEmpty({ message: 'A descrição não pode ser vazia.' })
  description: string;
}

class ImageProductDTO {
  @IsNotEmpty({ message: 'A imagem deve conter uma URL.' })
  url: string;

  @IsNotEmpty({ message: 'A imagem deve conter uma descrição.' })
  description: string;
}

export class CreateProductDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  name: string;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'O valor não pode ser igual ou menor que 0.' },
  )
  @IsPositive({ message: 'O valor não pode ser igual ou menor que 0.' })
  price: number;

  @IsNumber(
    { maxDecimalPlaces: 0 },
    { message: 'A quantidade não pode ser menor que 0.' },
  )
  @IsPositive({ message: 'A quantidade não pode ser menor que 0.' })
  quantity: number;

  @IsNotEmpty({ message: 'A descrição não pode ser vazia.' })
  @MaxLength(1000, {
    message: 'A descrição não pode ter mais de 1000 caracteres.',
  })
  description: string;

  @ValidateNested()
  @IsArray({
    message: 'A lista de características do produto deve ser um array.',
  })
  @Type(() => FeatureProductDTO)
  @MinLength(2, {
    message:
      'A lista de características do produto precisa ter ao menos 2 itens',
  })
  features: FeatureProductDTO[];

  @ValidateNested()
  @IsArray({ message: 'A lista de imagens do produto deve ser um array.' })
  @Type(() => ImageProductDTO)
  @MinLength(1, {
    message: 'A lista de imagens do produto precisa ter ao menos 1 item',
  })
  images: ImageProductDTO[];

  @IsNotEmpty({ message: 'A categoria não pode ser vazia.' })
  category: string;

  @IsDate({ message: 'A data de criação não é válida.' })
  creationDate: Date;

  @IsDate({ message: 'A data de atualização não é válida.' })
  updateDate: Date;
}
