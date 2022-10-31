import {Router} from 'express';
import {PrismaClient} from '@prisma/client';

const routes = Router()

const prisma = new PrismaClient({
  log: ['query']
})


routes.get('/movies', async (req, res) => {
  const movies = await prisma.film.findMany()
  console.log(movies)

  return res.json(movies)
})
  

export default routes