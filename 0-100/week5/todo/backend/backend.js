const express = require("express");
const app = express();
const port = 3000;
import { createTodo, updateTodo } from "./types";
app.use(express.json());

app.post("/todo", (req, res) => {
  const creatPayload = req.body;
  const parsedPayload = createTodo.safeParse(creatPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Invalid inputs",
    });
    return;
  }
});

app.get("/todos", (req, res) => {
  res.send("hii there");
});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "invalid input cant update the todo",
    });
    return;
  }
});

app.listen(port);
