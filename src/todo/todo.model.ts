import { Column, CreatedAt, HasMany, HasOne, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table
export class todo extends Model {
  @Column
  description!: string;
  
  @Column
  status!: boolean;

  @Column
  @CreatedAt
  created_at!: Date;

  @Column
  @UpdatedAt
  updated_at!: Date;
}
