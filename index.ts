import express, { json, urlencoded } from "express";
import {
  allBooksController,
  oneBookController,
} from "./controllers/booksController";
import { indexController } from "./controllers/indexController";
import {
  addUserController,
  allUsersController,
  oneUserController,
} from "./controllers/usersController";

const app = express();

const PORT = 5000;

const server = async () => {
  // Middleware
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.set("view engine", "ejs");

  // Routes

  app.get("/", indexController);

  app.get("/users", allUsersController);
  app.get("/users/:id", oneUserController);
  app.post("/users", addUserController);

  app.get("/books", allBooksController);
  app.get("/books/:id", oneBookController);

  // Server
  app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
};

server();
