import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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

@Controller('user')
export class UserController {
  @Get()
  getUsers(@Query('name') name: string) {
    if (name) {
      return USERS.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    return USERS;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    const userId = id;
    const result = USERS.find((user) => String(user.id) === userId);

    if (!result) {
      return {
        message: 'Resource with given id is not found',
      };
    }

    return result;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      data: createUserDto,
      message: 'User Created Successfully',
    };
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      data: { id, ...updateUserDto },
      message: 'User Created Successfully',
    };
  }
}
