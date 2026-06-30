import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserLoggers } from './user.logger';

export interface Users {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private readonly userLogger: UserLoggers) {}

  private users: Users[] = [
    {
      id: 1,
      name: 'Sushank',
      email: 'asd@gmail.com',
    },
    {
      id: 2,
      name: 'Amrita',
      email: 'asd@asd.com',
    },
  ];

  private nextId = 3;

  findAllUsers(name: string = '') {
    this.userLogger.log('Getting all users');

    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  findAllUserById(id: string = '') {
    this.userLogger.log(`Getting user of id ${id}`);

    const user = this.users.find((user) => String(user.id) === id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);

    return user;
  }

  createUser(dto: CreateUserDto) {
    this.userLogger.log(`Creating user: ${dto.name}`);

    const newUser: Users = { id: this.nextId++, ...dto };
    this.users.push(newUser);

    return newUser;
  }

  updateUser(id: string, dto: UpdateUserDto) {
    this.userLogger.log(`Updating user of id ${id}`);

    const index = this.users.findIndex((user) => String(user.id) === id);
    if (index === -1)
      throw new NotFoundException(`User with id ${id} not found`);

    this.users[index] = { ...this.users[index], ...dto };

    return this.users[index];
  }

  deleteUser(id: string) {
    this.userLogger.log(`Deleting user of id ${id}`);

    const index = this.users.findIndex((user) => String(user.id) === id);
    if (index === -1)
      throw new NotFoundException(`User with id ${id} not found`);

    const [deleted] = this.users.splice(index, 1);

    return deleted;
  }
}
