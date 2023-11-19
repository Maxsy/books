import { Prisma } from "database";
import { client } from "../clients/prisma";

export const Book = {
  async create(data: Prisma.BookCreateInput) {
    return client.book.create({ data });
  },
  async all() {
    return client.book.findMany();
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
