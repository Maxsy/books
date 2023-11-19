import fastify from "fastify";
import booksRoutes from "./routes/books";
import process from "process";

const app = fastify({
  logger: true,
});

app.register(booksRoutes);

const start = async () => {
  try {
    await app.listen({ port: 3000 });

    const address = app.server.address();
    app.log.info(`server listening on ${address} 🚀`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
