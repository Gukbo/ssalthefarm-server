import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Game } from '../../games/entities/game.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  // 1. 유저와의 관계 (N:1)
  // "많은 게시글(Many)이 한 명의 유저(One)에 의해 쓰인다"
  @ManyToOne(() => User, (user) => user.posts, { eager: false })
  user: User;

  // 2. 게임과의 관계 (N:1)
  // "많은 게시글(Many)이 하나의 게임(One) 주제로 쓰인다"
  @ManyToOne(() => Game, (game) => game.posts, { eager: false })
  game: Game;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
