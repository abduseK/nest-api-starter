import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createUserDto: Prisma.UsersCreateInput) {
    return this.databaseService.users.create({
      data: createUserDto,
    });
  }

  async findAll(role?: 'Intern' | 'Engineer' | 'Admin') {
    return this.databaseService.users.findMany({
      where: {
        role,
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.users.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserDto: Prisma.UsersUpdateInput) {
    return this.databaseService.users.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.users.delete({
      where: {
        id,
      },
    });
  }
}
