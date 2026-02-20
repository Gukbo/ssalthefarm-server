import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 추가
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { Game } from './entities/game.entity'; // 추가

@Module({
  imports: [TypeOrmModule.forFeature([Game])], // 이걸 꼭 넣어줘야 Service에서 DB를 쓸 수 있어요!
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
