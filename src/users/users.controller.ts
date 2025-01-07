import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // lets add query parameter for the get request
  @Get() // /user, returns all users
  findAll(@Query('role') role?: 'Engineer' | 'Admin' | 'VEP') {
    return [];
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
