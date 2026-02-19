import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).send({ message: 'Token não fornecido' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret')
    req.user = decoded // adiciona os dados do usuário no request
    next()
  } catch {
    return res.status(401).send({ message: 'Token inválido' })
  }
}
