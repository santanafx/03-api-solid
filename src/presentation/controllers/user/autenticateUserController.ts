import type { Response, Request } from 'express'
import z from "zod"
import jwt from 'jsonwebtoken'
import { InvalidUserCredentials } from '../../../application/errors/invalidUserCredentials.js'
import { makeAutenticateUserUseCase } from '../../../application/useCases/factories/makeAutenticateUserUseCase.js'

export async function autenticateUserController(req: Request, res: Response) {
  const autenticateUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { email, password } = autenticateUserSchema.parse(req.body)

  try {
    const autenticateUserUseCase = makeAutenticateUserUseCase()
    const { user } = await autenticateUserUseCase.execute(email, password)

    // Gera o token JWT com o id do usuário
    const token = jwt.sign(
      { sub: user.id }, // sub = subject (id do usuário)
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' } // token expira em 7 dias
    )

    return res.status(200).send({ token })
  } catch (err) {
    if (err instanceof InvalidUserCredentials) {
      return res.status(400).send() //400 bad request, algum campo foi introduzido errado
    }

    return res.status(500).send()
  }
}