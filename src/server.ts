import fastify from "fastify";
import { dataRoutes } from "./routes/data";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;
const app = fastify();

app.register(dataRoutes);

app.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" }).then(() => {
  console.log("Servidor iniciado");
});
