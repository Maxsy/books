import { FastifyPluginAsync, FastifyRequest } from "fastify";
import { Book } from "../models/book";
import {
  CreateBookRequestBody,
  DeleteBookRequestParams,
  GetBookRequestParams,
  UpdateBookRequestBody,
} from "../@types/book";

const booksRoutes: FastifyPluginAsync = async (app, opts): Promise<void> => {
  app.get("/", async (request, reply) => {
    const books = await Book.findMany();

    reply.send(books);
  });

  app.get("/:id", async (request: GetBookRequestParams, reply) => {
    const { id } = request.params;
    const book = await Book.findOne(Number(id));

    reply.send(book);
  });

  app.post("/", async (request: CreateBookRequestBody, reply) => {
    const book = await Book.create(request.body);

    reply.send(book);
  });

  app.put("/:id", async (request: UpdateBookRequestBody, reply) => {
    const { id } = request.params;
    const book = await Book.update(Number(id), request.body);

    reply.send(book);
  });

  app.delete("/:id", async (request: DeleteBookRequestParams, reply) => {
    const { id } = request.params;
    const book = await Book.delete(Number(id));

    reply.send(book);
  });
};

export default booksRoutes;
