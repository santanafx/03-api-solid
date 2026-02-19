import { hash } from "bcryptjs"
import type { iRegisterUserUseCase } from "./iRegisterUserUseCase.js"
import { UserAlreadyExistsError } from "../../errors/userAlreadyExistsError.js"
import type { IUserRepository } from "../../../domain/iRepository/iUserRepository.js"

export class RegisterUserUseCase {
  constructor(private userRepository: IUserRepository) { }

  async execute({ name, email, password }: iRegisterUserUseCase) {

    // const password_hash = await hash(password, "salt")
    const password_hash = await hash(password, 6)

    const userWIthTheSameEmail = await this.userRepository.findByEmail(email)

    if (userWIthTheSameEmail) {
      throw new UserAlreadyExistsError()
    }

    await this.userRepository.create({ name, email, password_hash })
  }
}
