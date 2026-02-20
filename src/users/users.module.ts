import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // User 엔티티 등록
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // 게시글에서 유저 정보 찾기
})
export class UsersModule {}
