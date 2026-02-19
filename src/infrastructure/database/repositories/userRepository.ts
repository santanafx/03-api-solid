import type { IUserRepository } from "../../../domain/iRepository/iUserRepository.js";
import type { User } from '../../../../prisma/generated/client.js'
import type { Prisma } from '../../../../prisma/generated/client.js'
import { prisma } from "../../../server.js";

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const userWIthTheSameEmail = await prisma.user.findUnique({
      where: {
        email
      }
    })

    return userWIthTheSameEmail
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = await prisma.user.create({
      data
    })

    return user
  }
}