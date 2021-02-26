import { prisma } from "../utils/prismaInit";
import type { Request, Response } from "express";

export const allBooksController = async (req: Request, res: Response) => {
  const books = await prisma.book.findMany();
  // console.log(users);

  return res.render("books", { books });
};

export const oneBookController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const url = `${req.protocol}://${req.get("host")}`;
  const book = await prisma.book.findUnique({
    where: { id },
    include: { author: true },
  });
  console.log(book);

  return res.render("bookDetail", { book, url });
};
