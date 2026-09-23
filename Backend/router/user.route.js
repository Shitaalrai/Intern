import express from "express"

import { deleteUser, getUser,postUser, updateUser } from "../controller/user.js"

const route = express.Router();

route.get("/get-user",getUser); 
route.post("/post-user",postUser); 
route.delete("/delete-user",deleteUser); 
route.patch("/update-user",updateUser); 


export default route;