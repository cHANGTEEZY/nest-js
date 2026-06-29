import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(@Query('name') name: string): unknown {
    return this.userService.findAllUsers(name);

    // if (name) {
    //   return USERS.filter((user) =>
    //     user.name.toLowerCase().includes(name.toLowerCase()),
    //   );
    // }
    // return USERS;
  }

  @Get(':id')
  getUserById(@Param('id') id: string): unknown {
    const userId = id;
    return this.userService.findAllUserById(userId);
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
