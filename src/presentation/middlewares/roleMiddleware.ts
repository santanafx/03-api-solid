import type { Request, Response, NextFunction } from 'express'
import type { Role } from '../../../prisma/generated/enums.js'

export function verifyRole(...allowedRoles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role as Role

    if (!userRole) {
      return res.status(403).send({ message: 'Acesso negado: role não encontrado' })
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).send({ message: 'Acesso negado: permissão insuficiente' })
    }

    next()
  }
}
