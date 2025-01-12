// Concept of controller and how they work

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { STATUS_CODES } from 'http';

@Controller('users')
export class UsersController {
  @Get()
  @HttpCode(303) // helps to set the status code of the response
  findAll() {
    return 'Hello There';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userupdate: {}) {
    return { id, ...userupdate };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
