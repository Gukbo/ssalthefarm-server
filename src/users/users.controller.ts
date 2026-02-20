import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  // 1. 서비스(일꾼)를 데려옵니다.
  constructor(private readonly usersService: UsersService) {}

  // 2. POST 요청이 오면 회원가입을 시킵니다.
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // 3. GET 요청이 오면 모든 유저를 보여줍니다.
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // 4. GET /users/1 처럼 뒤에 ID가 오면 특정 유저만 보여줍니다.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id); // +id는 문자열을 숫자로 바꾸는 팁!
  }

  // 5. PATCH 요청이 오면 정보를 수정합니다.
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // 6. DELETE 요청이 오면 유저를 삭제합니다.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
