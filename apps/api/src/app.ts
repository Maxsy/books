import fastify from "fastify";

const app = fastify({
  logger: true,
});

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

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
