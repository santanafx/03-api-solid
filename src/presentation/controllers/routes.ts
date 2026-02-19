import { Express } from 'express'
import { registerUserController } from './user/registerUserController.js'


export async function appRoutes(app: Express) {
  app.post('/user', registerUserController)
}