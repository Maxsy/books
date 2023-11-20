import { Prisma } from "database";
import { client } from "../clients/prisma";
import { BooksWithCustomPagination } from "../@types/book";

export const Book = {
  async create(data: Prisma.BookCreateInput) {
    return client.book.create({ data });
  },

  async all({
    take = 10,
    skip,
    page = 1,
    query = "",
  }: BooksWithCustomPagination) {
    return client.book
      .paginate({
        where: {
          title: {
            contains: query,
          },
        },
      })
      .withPages({
        limit: take,
        orderBy: { id: "asc" },
        includePageCount: true,
        page: Number(page),
        skip,
      });
  },

  async find(id: number) {
    return client.book.findUnique({ where: { id } });
  },

  async update(id: number, data: Prisma.BookUpdateInput) {
    return client.book.update({ where: { id }, data });
  },

  async delete(id: number) {
    return client.book.delete({ where: { id } });
  },
};
