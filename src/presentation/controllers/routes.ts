import type { Express } from 'express'
import { registerUserController } from './user/registerUserController.js'
import { autenticateUserController } from './user/autenticateUserController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

export async function appRoutes(app: Express) {
  app.post('/user', authMiddleware, registerUserController)
  app.post('/session', autenticateUserController)
}