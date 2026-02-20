import { Injectable } from '@nestjs/common';
import { CreateBoardCategoryDto } from './dto/create-board-category.dto';
import { UpdateBoardCategoryDto } from './dto/update-board-category.dto';

@Injectable()
export class BoardCategoriesService {
  create(createBoardCategoryDto: CreateBoardCategoryDto) {
    return 'This action adds a new boardCategory';
  }

  findAll() {
    return `This action returns all boardCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boardCategory`;
  }

  update(id: number, updateBoardCategoryDto: UpdateBoardCategoryDto) {
    return `This action updates a #${id} boardCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardCategory`;
  }
}
