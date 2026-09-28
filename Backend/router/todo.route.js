import express from "express"
import { deleteTask, getTask, postTask, updateTask } from "../controller/todo.js";

const route = express.Router();

route.get("/get-task",getTask);
route.post("/post-task",postTask);
route.delete("/delete-task/:id",deleteTask);
route.put("/update-task/:id",updateTask);

export default route;