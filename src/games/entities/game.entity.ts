import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

import { Post } from '../../posts/entities/post.entity';
import { OneToMany } from 'typeorm';

@Entity() // 이 클래스가 MySQL의 'game' 테이블이 됩니다.
export class Game {
  @PrimaryGeneratedColumn() // PK (ID) 및 자동 증가(Auto Increment) 설정입니다.
  id: number;

  @Column({ length: 50 }) // 게임 이름 (VARCHAR 50)
  name: string;

  @Column({ length: 50, unique: true }) // URL에 사용될 슬러그 (중복 방지를 위해 unique 추가)
  slug: string;

  @Column({ default: true }) // 게임 활성화 여부 (기본값 true)
  is_active: boolean;

  @CreateDateColumn() // 데이터 생성 시 자동으로 현재 시간이 기록됩니다.
  created_at: Date;

  @OneToMany(() => Post, (post) => post.game)
  posts: Post[];
}
