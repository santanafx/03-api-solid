import { UserRepository } from "../../../infrastructure/database/repositories/userRepository.js"
import { AutenticateUserUseCase } from "../registerUserUseCase/autenticateUserUseCase.js"

//serve para instaciacao de classes que tem muitos requisitos
export function makeAutenticateUserUseCase() {
  const userRepository = new UserRepository()
  const autenticateUserUseCase = new AutenticateUserUseCase(userRepository)

  return autenticateUserUseCase
}