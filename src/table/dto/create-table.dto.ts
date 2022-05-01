import { IsNumber, IsPositive } from 'class-validator';

export class CreateTableDto {
  @IsNumber()
  @IsPositive()
  number: number;
}
