import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(@Query('name') name: string) {
    return this.userService.findAllUsers(name);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.findAllUserById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      data: this.userService.createUser(createUserDto),
      message: 'User Created Successfully',
    };
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      data: this.userService.updateUser(id, updateUserDto),
      message: 'User Updated Successfully',
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return {
      data: this.userService.deleteUser(id),
      message: 'User Deleted Successfully',
    };
  }
}
