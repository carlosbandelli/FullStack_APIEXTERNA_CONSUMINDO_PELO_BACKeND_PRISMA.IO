import express from 'express';
import routes from './routes';
import cors from 'cors';

require('dotenv').config();

const server = express();

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(routes)




server.listen(process.env.PORT,() => {
    console.log(`server executando na port: ${process.env.PORT}`);
});

export default server
