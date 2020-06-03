const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let tasks = [
  {
    id: 1,
    completed: false,
    task: "Learn docker",
  },
  {
    id: 2,
    completed: false,
    task: "Build a todo app",
  },
  {
    id: 3,
    completed: false,
    task: "Dockerize this todo app",
  },
];

app.get("/", (_, res) => {
  res.json(tasks);
});

app.post("/", (req, res) => {
  let { task } = req.body;
  let id = tasks.length;
  tasks.unshift({ id, completed: false, task });
  res.json(tasks);
});

app.listen(8080, () => console.log("listening on port 8080"));
