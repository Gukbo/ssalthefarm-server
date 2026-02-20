import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BoardCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string; // 카테고리 이름 (예: 자유게시판, 꿀팁게시판)

  @Column({ default: 0 })
  display_order: number; // 프론트엔드에서 보여줄 순서
}
