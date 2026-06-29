import { Injectable } from '@nestjs/common';
import { UserLoggers } from './user.logger';

interface Users {
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

  findAllUsers(name: string = '') {
    this.userLogger.log('Getting all users');

    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  findAllUserById(id: string = '') {
    this.userLogger.log(`Getting user of id ${id}`);

    return this.users.find((user) => String(user.id) === id);
  }
}
