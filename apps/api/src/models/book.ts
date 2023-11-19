import { Prisma } from "database";
import { client } from "../clients/prisma";

export const Book = {
  async create(data: Prisma.BookCreateInput) {
    return client.book.create({ data });
  },
  async findMany() {
    return client.book.findMany();
  },
  async findOne(id: number) {
    return client.book.findUnique({ where: { id } });
  },
  async update(id: number, data: Prisma.BookUpdateInput) {
    return client.book.update({ where: { id }, data });
  },
  async delete(id: number) {
    return client.book.delete({ where: { id } });
  },
};
