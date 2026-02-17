import 'dotenv/config'
import express from 'express'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../prisma/generated/client.js'
import z from 'zod'

export const app = express()

app.use(express.json())

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'dev' ? ['query'] : []
})

app.post("/user", async (req, res) => {
  const registerUserSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    password: z.string().min(6)
  })

  const { name, email, password } = registerUserSchema.parse(req.body)

  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password_hash: password
    }
  }
  )

  return res.status(200).send()
})

app.listen(process.env.PORT || 3333)