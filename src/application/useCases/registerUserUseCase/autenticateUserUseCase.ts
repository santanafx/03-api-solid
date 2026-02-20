import { compare } from "bcryptjs";
import type { UserRepository } from "../../../infrastructure/database/repositories/userRepository.js";
import { InvalidUserCredentials } from "../../errors/invalidUserCredentials.js";
import type { User } from "../../../../prisma/generated/client.js";


//TODO falta DTO
export class AutenticateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute(email: string, password: string): Promise<{ user: User }> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new InvalidUserCredentials()
    }

    const doesPasswordMatches = await compare(password, user.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidUserCredentials()
    }

    return {
      user
    }
  }
}