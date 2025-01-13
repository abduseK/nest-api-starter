import { Injectable } from '@nestjs/common';
import { CreateuserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'James',
      email: 'james33@gmail.com',
      role: 'Engineer',
    },
    {
      id: 2,
      name: 'Abdu',
      email: 'abdu45@gmail.com',
      role: 'Intern',
    },
    {
      id: 3,
      name: 'Geda',
      email: 'geda23@gmail.com',
      role: 'Admin',
    },
    {
      id: 4,
      name: 'Tnsu',
      email: 'tnsubirhan@gmail.com',
      role: 'Engineer',
    },
  ];

  findAll(role?: 'Intern' | 'Engineer' | 'Admin') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(createUserDto: CreateuserDto) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
