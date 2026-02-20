import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty({ message: '제목은 비어있을 수 없습니다.' })
  @MinLength(2, { message: '제목은 최소 2글자 이상이어야 합니다.' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: '내용을 입력해주세요.' })
  content: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  gameId: number;
}
