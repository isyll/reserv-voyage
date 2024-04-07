import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

export const hashPassword = async (password: string) => {
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  return hashedPassword
}

const prisma = new PrismaClient()

async function main() {
  const password = await hashPassword('password')
  const user = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
      email: 'test@test.com',
      name: 'Test User',
      password: password,
    },
  })
  console.log(user)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
