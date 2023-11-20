import { PrismaClient } from "database";
import { paginate } from "prisma-extension-pagination";

export const client = new PrismaClient().$extends({
  model: {
    book: {
      paginate,
    },
  },
});
