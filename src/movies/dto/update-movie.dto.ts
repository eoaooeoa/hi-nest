import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDtO } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDtO) {}
