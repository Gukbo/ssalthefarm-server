import { Module } from '@nestjs/common';
import { BoardCategoriesService } from './board-categories.service';
import { BoardCategoriesController } from './board-categories.controller';

@Module({
  controllers: [BoardCategoriesController],
  providers: [BoardCategoriesService],
})
export class BoardCategoriesModule {}
