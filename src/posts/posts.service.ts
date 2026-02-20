import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  // 1. 게시글 생성
  async create(createPostDto: CreatePostDto) {
    const post = this.postsRepository.create({
      title: createPostDto.title,
      content: createPostDto.content,
      user: { id: createPostDto.userId },
      game: { id: createPostDto.gameId },
    });
    return await this.postsRepository.save(post);
  }

  // 2. 모든 게시글 조회 (유저, 게임 정보 포함)
  async findAll(gameId?: number, search?: string) {
    const where: FindOptionsWhere<Post> = {};

    if (gameId) {
      where.game = { id: gameId };
    }

    if (search) {
      where.title = Like(`%${search}%`);
    }

    return await this.postsRepository.find({
      where,
      relations: ['user', 'game'],
      order: { createdAt: 'DESC' },
    });
  }

  // 3. 특정 게시글 하나 조회
  async findOne(id: number) {
    const post = await this.postsRepository.findOne({
      where: { id },
      relations: ['user', 'game'],
    });

    if (!post) {
      throw new NotFoundException(`ID ${id}인 게시글을 찾을 수 없습니다.`);
    }

    return post;
  }

  // 4. 게시글 수정
  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);
    Object.assign(post, updatePostDto);
    return await this.postsRepository.save(post);
  }

  // 5. 게시글 삭제
  async remove(id: number) {
    const post = await this.findOne(id);
    await this.postsRepository.remove(post);
    return { message: `${id}번 게시글이 성공적으로 삭제되었습니다.` };
  }
}
