import { prisma } from "../utils/prismaInit";
import type { Request, Response } from "express";

export const indexController = async (req: Request, res: Response) => {
  return res.render("index");
};
