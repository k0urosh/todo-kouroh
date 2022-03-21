import { Column, CreatedAt, Default, HasMany, HasOne, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table
export class todo extends Model {
  @Column
  description?: string;
  
  @Column
  status?: boolean;

  @Default(false)
  @Column
  is_delete?: boolean;

  @Column
  @CreatedAt
  created_at?: Date;

  @Column
  @UpdatedAt
  updated_at?: Date;
}
