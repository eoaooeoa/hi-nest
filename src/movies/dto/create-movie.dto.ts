import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDtO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
