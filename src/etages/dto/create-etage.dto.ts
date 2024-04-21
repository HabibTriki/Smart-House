import { IsNotEmpty, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { LampeEntity } from '../../lampes';
import { StoreEntity } from '../../stores';
import { BaseModel, Trim } from '../../../packages';

export class createEtageDto extends BaseModel {
  @IsNotEmpty()
  @Type(() => String)
  @Trim()
  nom!: string;

  @IsNotEmpty()
  @Type(() => Number)
  @Min(0)
  nbChambres!: number;

  @IsOptional()
  @Type(() => LampeEntity)
  lampes: LampeEntity[];

  @IsOptional()
  @Type(() => StoreEntity)
  stores: StoreEntity[];
}
