import fastify from "fastify";
import booksRoutes from "./routes/books";
import process from "process";
import pino from "pino";
import pretty from "pino-pretty";

const port = 3000;
const logger = pino(pretty());

const app = fastify({
  logger,
  disableRequestLogging: true,
});

// register route plugins
app.register(booksRoutes);

const start = async () => {
  try {
    await app.listen({ port });

    app.log.info(`server listening on ${port} 🚀`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
