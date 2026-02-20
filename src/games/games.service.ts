import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  // 1. 게임 생성
  async create(createGameDto: CreateGameDto) {
    const newGame = this.gamesRepository.create(createGameDto);
    return await this.gamesRepository.save(newGame);
  }

  // 2. 모든 게임 조회
  findAll() {
    return this.gamesRepository.find();
  }

  // 👇 여기부터 없어서 에러가 났던 친구들입니다! 👇

  // 3. 특정 게임 조회 (ID로 찾기)
  async findOne(id: number) {
    const game = await this.gamesRepository.findOneBy({ id });
    if (!game) {
      throw new NotFoundException(`Game with ID ${id} not found`);
    }
    return game;
  }

  // 4. 게임 정보 수정
  async update(id: number, updateGameDto: UpdateGameDto) {
    await this.gamesRepository.update(id, updateGameDto);
    return this.findOne(id); // 수정된 정보 다시 보여주기
  }

  // 5. 게임 삭제
  async remove(id: number) {
    const game = await this.findOne(id); // 있는지 먼저 확인하고
    return await this.gamesRepository.remove(game); // 삭제
  }
}
