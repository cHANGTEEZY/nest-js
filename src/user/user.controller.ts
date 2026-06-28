import { Controller, Get, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUsers(@Query('name') name: string) {
    const USERS = [
      {
        id: 1,
        name: 'Sushank',
      },
      {
        id: 2,
        name: 'Amrita',
      },
    ];

    if (name) {
      return USERS.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    return USERS;
  }
}
