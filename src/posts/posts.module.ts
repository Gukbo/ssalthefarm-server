import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 👈 추가
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './entities/post.entity'; // 👈 추가

@Module({
  imports: [TypeOrmModule.forFeature([Post])], // 👈 Post 엔티티 등록!
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
