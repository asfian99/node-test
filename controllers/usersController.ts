import { prisma } from "../utils/prismaInit";
import type { Request, Response } from "express";

export const allUsersController = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  // console.log(users);

  return res.render("users", { names: users });
};

export const oneUserController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const url = `${req.protocol}://${req.get("host")}`;
  const user = await prisma.user.findUnique({
    where: { id },
    include: { books: true },
  });
  // console.log(`${req.get("host")}${req.originalUrl}`);
  // console.log(user);

  return res.render("userDetail", { user, url });
};

export const addUserController = async (req: Request, res: Response) => {
  const { username, fullName } = req.body;

  const newUser = await prisma.user.create({
    data: { username, name: fullName },
  });
  console.log(newUser);

  res.redirect(req.originalUrl);
};
