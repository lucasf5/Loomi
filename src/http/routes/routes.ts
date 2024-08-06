import { FastifyInstance } from "fastify";
import { mainController } from "../controllers/main.controller";

export const appRoutes = async (app: FastifyInstance) => {
  app.get("/", mainController);
};
