import { FastifyPluginAsync, FastifyRequest } from "fastify";
import { Book } from "../models/book";
import {
  CreateBookRequestBody,
  DeleteBookRequestParams,
  GetBookRequestParams,
  UpdateBookRequestBody,
} from "../@types/book";

const booksRoutes: FastifyPluginAsync = async (app, opts): Promise<void> => {
  app.setErrorHandler((error, request, reply) => {
    app.log.error(error);

    reply.send({
      error: {
        message: "Error encountered while processing request.",
      },
    });
  });

  app.get("/books", async (request, reply) => {
    const books = await Book.all();

    reply.send(books);
  });

  app.post("/books", async (request: CreateBookRequestBody, reply) => {
    const book = await Book.create(request.body);

    reply.send(book);
  });

  app.get("/books/:id", async (request: GetBookRequestParams, reply) => {
    const { id } = request.params;
    const book = await Book.find(Number(id));

    reply.send(book);
  });

  app.put("/books/:id", async (request: UpdateBookRequestBody, reply) => {
    const { id } = request.params;
    const book = await Book.update(Number(id), request.body);

    reply.send(book);
  });

  app.delete("/books/:id", async (request: DeleteBookRequestParams, reply) => {
    const { id } = request.params;
    const book = await Book.delete(Number(id));

    reply.send(book);
  });
};

export default booksRoutes;
