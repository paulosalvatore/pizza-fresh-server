import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6InBhdWxvc2FsdmF0b3JlIiwiaWF0IjoxNjUyMjgxNjUwLCJleHAiOjE2NTIzNjgwNTB9._otkmKymFZ4kgxwAMdK5oXBDg6cK6_NXwCrP64IilS8',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: User;
}
