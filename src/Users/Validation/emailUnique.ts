import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class emailUniqueValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ValidationArguments: ValidationArguments,
  ): Promise<boolean> {
    const alreadyTegistered = await this.userRepository.searchEmail(value);
    return !alreadyTegistered;
  }
}

export const emailIsUnique = (validationOptions?: { message?: string }) => {
  return (obj: object, props: string) => {
    registerDecorator({
      name: 'emailIsUnique',
      target: obj.constructor,
      propertyName: props,
      options: validationOptions,
      constraints: [],
      validator: emailUniqueValidator,
    });
  };
};
