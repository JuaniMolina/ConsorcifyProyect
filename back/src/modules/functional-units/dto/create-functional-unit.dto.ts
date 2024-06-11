import {
  IsEnum,
  IsNotEmpty,
  IsEmail,
  IsString,
  Length,
  IsUUID,
  Matches,
  IsDecimal,
  IsNumber,
} from 'class-validator';
import { FUNCTIONAL_UNIT_TYPE } from 'src/utils/constants';

export class CreateFunctionalUnitDto {
  @IsEnum(FUNCTIONAL_UNIT_TYPE)
  @IsNotEmpty()
  type: FUNCTIONAL_UNIT_TYPE;

  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  location: string;

  @IsString()
  @Length(1, 20)
  @IsNotEmpty()
  number: string;

  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  owner: string;

  @IsString()
  @Length(1, 20)
  @Matches(/^[0-9]+$/, {
    message: 'owner_phone_number must contain only numbers',
  })
  @IsNotEmpty()
  owner_phone_number: string;

  @IsEmail()
  @Length(1, 50)
  @IsNotEmpty()
  owner_email: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  balance: number;

  @IsUUID()
  @IsNotEmpty()
  consortium_id: string;
}
