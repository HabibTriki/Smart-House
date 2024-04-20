import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../packages';
import { Min } from 'class-validator';
import { Expose } from 'class-transformer';
import { CarteEntity } from '../../cartes';
import { LampeEntity } from '../../lampes';
import { StoreEntity } from '../../stores';

@Entity({ name: 'etages' })
export class EtageEntity extends BaseEntity {
  protected keyPrefix = 'etage_';

  @Column({ unique: true, length: 100 })
  @Expose()
  nom!: string;

  @Column({ name: 'nb_chambres' })
  @Min(0)
  @Expose()
  nbChambres!: number;

  @OneToMany(() => CarteEntity, (carte) => carte.etage)
  cartes?: CarteEntity[];

  @OneToMany(() => LampeEntity, (lampe) => lampe.etage)
  lampes?: LampeEntity[];

  @OneToMany(() => StoreEntity, (store) => store.etage)
  stores?: StoreEntity[];
}
