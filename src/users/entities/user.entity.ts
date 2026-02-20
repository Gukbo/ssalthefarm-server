import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { OneToMany } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true }) // 이메일 중복 방지
  email: string;

  @Exclude()
  @Column({ length: 255 }) // 암호화된 비밀번호가 저장될 공간
  password: string;

  @Column({ length: 50, unique: true }) // 닉네임 중복 방지
  nickname: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
