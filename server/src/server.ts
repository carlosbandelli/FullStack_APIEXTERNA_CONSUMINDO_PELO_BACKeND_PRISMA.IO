import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import https from 'https';
import fs from 'fs';

import swaggerDocs from "./swagger.json";
import routes from './routes';


require('dotenv').config();

const server = express();
 server.enable("trust proxy");
 server.use(function(req, res, next) {
    if (req.secure){
      return next();
    }
    res.redirect("https://" + req.headers.host + req.url);
  });
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))



server.use(routes)


server.listen(process.env.PORT,() => {
    console.log(`server executando na port http://localhost:${process.env.PORT}`);
});

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, server).listen(process.env.HTTPS_PORT, () => console.log(`Consumo de api externa executando na port https://localhost:${process.env.HTTPS_PORT}`))

export default server
