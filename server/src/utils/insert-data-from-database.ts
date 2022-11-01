import {PrismaClient} from '@prisma/client';
import { getApi } from './get-data';

const prisma = new PrismaClient({
  log: ['query']
})

const dados = getApi()

dados.then(function(response){
  let api = response.data  
  api = api.map(function(film: {
    image: string;
    producer: string;
    director: string; 
    id: string; 
    title: string; 
    description: string; 
}){
    return {
      id: film.id,
      title: film.title,
      description: film.description,
      director: film.director,
      producer: film.producer,
      image: film.image
    }
  }).forEach(async (film:any) => await prisma.film.create({ data:{
    id: film.id,
    title: film.title,
    description: film.description,
    director: film.director,
    producer: film.producer,
    image: film.image
  }}))   
    
}).catch(function(error){  
  if(error){
    console.log(error)
  }  
})
