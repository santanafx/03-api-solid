import { Response, Request } from 'express'
import z from "zod"
import { UserAlreadyExistsError } from '../../../application/errors/userAlreadyExistsError.js'
import { RegisterUserUseCase } from '../../../application/useCases/registerUserUseCase/registerUserUseCase.js'
import { UserRepository } from '../../../infrastructure/database/repositories/userRepository.js'



export async function registerUserController(req: Request, res: Response) {
  const registerUserSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { name, email, password } = registerUserSchema.parse(req.body)

  try {
    const useRepository = new UserRepository()
    const registerUserUseCase = new RegisterUserUseCase(useRepository)
    await registerUserUseCase.execute({ name, email, password })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return res.status(409).send()
    }

    return res.status(500).send()
  }

  return res.status(201).send()
}