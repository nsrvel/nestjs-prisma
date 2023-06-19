import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * Get users
   * @returns
   */
  @Get()
  async users() {
    return await this.userService.findAll();
  }

  /**
   * Create user
   * @param body
   * @returns
   */
  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.createData(body);
  }

  /**
   * Update user
   * @param id
   * @param body
   * @returns
   */
  @UsePipes(ValidationPipe)
  @Patch('/:id')
  async updateUser(@Param('id', ParseIntPipe) id, @Body() body) {
    return await this.userService.updateData(id, body);
  }

  /**
   * Delete user
   * @param id
   * @returns
   */
  @UsePipes(ValidationPipe)
  @Delete('/:id')
  async deleteUser(@Param('id', ParseIntPipe) id) {
    return await this.userService.deleteUser(id);
  }
}
