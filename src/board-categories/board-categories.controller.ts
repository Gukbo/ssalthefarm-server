import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoardCategoriesService } from './board-categories.service';
import { CreateBoardCategoryDto } from './dto/create-board-category.dto';
import { UpdateBoardCategoryDto } from './dto/update-board-category.dto';

@Controller('board-categories')
export class BoardCategoriesController {
  constructor(private readonly boardCategoriesService: BoardCategoriesService) {}

  @Post()
  create(@Body() createBoardCategoryDto: CreateBoardCategoryDto) {
    return this.boardCategoriesService.create(createBoardCategoryDto);
  }

  @Get()
  findAll() {
    return this.boardCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardCategoryDto: UpdateBoardCategoryDto) {
    return this.boardCategoriesService.update(+id, updateBoardCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardCategoriesService.remove(+id);
  }
}
