// Concept of controller and how they work

import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { STATUS_CODES } from 'http';

@Controller('users')
export class UsersController {
  // @Get()
  // @Header(`custom`, 'val') // helps to set the status code of the response
  // @Redirect('https://google.com', 204)
  // findAll() {
  //   return 'Hello There';
  // }

  @Get()
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
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
