import fastify from "fastify";
import { dataRoutes } from "./routes/data";

const app = fastify()

app.register(dataRoutes)

app.listen({
  port: 5050
}).then(() =>{
  console.log('Servidor iniciado')
})