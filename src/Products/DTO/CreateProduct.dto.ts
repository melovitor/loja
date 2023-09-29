import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class FeatureProductDTO {
  @IsNotEmpty({
    message: 'O nome não pode ser vazio.',
  })
  name: string;

  @IsNotEmpty({
    message: 'A descrição não pode ser vazia.',
  })
  description: string;
}

export class ImageProductDTO {
  @IsNotEmpty({
    message: 'A imagem deve conter uma URL.',
  })
  url: string;

  @IsNotEmpty({
    message: 'A imagem deve conter uma descrição.',
  })
  description: string;
}

export class CriaProdutoDTO {
  @IsNotEmpty({
    message: 'O nome não pode ser vazio.',
  })
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive({
    message: 'O valor não pode ser igual ou menor que 0.',
  })
  price: number;

  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(0, {
    message: 'A quantidade não pode ser menor que 0.',
  })
  quantity: number;

  @IsNotEmpty({
    message: 'A descrição não pode ser vazia.',
  })
  @MaxLength(1000, {
    message: 'A descrição não pode ter mais de 1000 caracteres.',
  })
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => FeatureProductDTO)
  @MinLength(3, {
    message:
      'A lista de características do produto precisa ter pelo menos 3 itens',
  })
  features: FeatureProductDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => FeatureProductDTO)
  @MinLength(1, {
    message: 'A lista de imagens do produto precisa ter pelo menos 1 item',
  })
  images: ImageProductDTO[];

  @IsNotEmpty({
    message: 'A categoria não pode ser vazia.',
  })
  category: string;

  @IsDate()
  creationDate: string;

  @IsDate()
  updateDate: string;
}
