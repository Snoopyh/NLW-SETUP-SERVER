import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./lib/routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);
/*
 * metodo HTTP , Get , Post , Path , Patch , Delete
 */

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("http server running");
  });
