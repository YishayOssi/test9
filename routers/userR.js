import express from "express";
import { ReadUsers, CheckUser, SaveUser } from "../utils/allFile.js";

export const routerUser = express.Router();

// create user
routerUser.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = { username: username, password: password };
  if (typeof username === "string" && typeof password === "string") {
    const data = await ReadUsers();

    const checkUser = CheckUser(user, data);
    if (checkUser) {
      await SaveUser(user, data);
      res.status(201).json({ msg: "User created successfully..." });
    }
  }
});


