import { randomUUID } from 'crypto';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class LessonEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', length: 150 })
  name: string;

  @Column('timestamp with time zone', { name: 'startDate' })
  startDate: Date;

  @Column('timestamp with time zone', { name: 'startDate' })
  endDate: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
