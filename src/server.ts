import fastify from "fastify";
import { dataRoutes } from "./routes/data";

const app = fastify();

app.register(dataRoutes);

app.listen({ port: 5050 || 3000, host: "0.0.0.0" }).then(() => {
  console.log("Servidor iniciado");
});
