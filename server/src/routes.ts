import {Router} from 'express';
import {PrismaClient} from '@prisma/client';

const routes = Router()

const prisma = new PrismaClient({
  log: ['query']
})


routes.get('/movies', async (req, res) => {
  try {

  const movies = await prisma.film.findMany()
  console.log('Parabens voce pegou todos os filmes')
  console.log(movies)
  console.log(`Quantidade de filmes do estudio: ${movies.length}`)

  return res.status(200).json(movies)
  }catch (error) {
    console.log(`Mensagem de error: ${error}`)
    return res.status(400).json({ message:error})
  }
})
  

export default routes