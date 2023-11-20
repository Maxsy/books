import type { Prisma } from "database";
import type { FastifyRequest } from "fastify";

export type GetBookRequestParams = FastifyRequest<{
  Params: { id: number };
}>;

export type CreateBookRequestBody = FastifyRequest<{
  Body: Prisma.BookCreateInput;
}>;

export type UpdateBookRequestBody = FastifyRequest<{
  Body: Prisma.BookUpdateInput;
  Params: { id: number };
}>;

export type DeleteBookRequestParams = FastifyRequest<{
  Params: { id: number };
}>;

export type BooksWithCustomPagination = Prisma.BookFindManyArgs & {
  page?: number;
  query?: string;
};
