import { UserRepository } from "../../../infrastructure/database/repositories/userRepository.js"
import { RegisterUserUseCase } from "../registerUserUseCase/registerUserUseCase.js"

export function makeRegisterUserUseCase() {
  const userRepository = new UserRepository()
  const registerUserUseCase = new RegisterUserUseCase(userRepository)

  return registerUserUseCase
}