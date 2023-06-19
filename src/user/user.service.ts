import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private dbService: PrismaService) {}

  /**
   * Get all user
   * @returns
   */
  async findAll() {
    return await this.dbService.user.findMany();
  }

  /**
   * Create user
   * @param data
   * @returns
   */
  async createData(data: CreateUserDto) {
    return await this.dbService.user.create({
      data,
    });
  }

  /**
   * Update user
   * @param id
   * @param data
   * @returns
   */
  async updateData(id: number, data: any) {
    return await this.dbService.user.update({
      data,
      where: {
        id,
      },
    });
  }

  /**
   * Delete user
   * @param id
   * @returns
   */
  async deleteUser(id: number) {
    return await this.dbService.user.delete({
      where: {
        id,
      },
    });
  }
}
