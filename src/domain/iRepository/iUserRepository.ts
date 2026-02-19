import type { User } from '../../../prisma/generated/client.js'
import type { Prisma } from '../../../prisma/generated/client.js'

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}