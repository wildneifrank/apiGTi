import { FastifyInstance } from "fastify";
import { dataCarros, dataCasas, dataCelulares } from "../lib/data";

export async function dataRoutes(app: FastifyInstance){
  

  app.get('/carros', function(request, reply){
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(dataCarros)
  })

  app.get('/casas', function(request, reply){
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(dataCasas)
  })

  app.get('/celulares', function(request, reply){
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(dataCelulares)
  })
}