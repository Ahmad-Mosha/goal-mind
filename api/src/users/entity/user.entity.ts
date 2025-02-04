import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @Unique(['email'])
  email: string;

  @Column()
  password: string;

  @Column()
  favoriteTeams: string[];

  @Column()
  favoritePlayers: string[];
}
