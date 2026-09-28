import express from "express"

import { deleteUser, getSingleUser, getUser,postUser, updateUser } from "../controller/user.js"
import { isAuth } from "../middleware/authMiddleware.js";

const route = express.Router();

route.get("/get-user",getUser); 
route.get("/get-single-user/:id",getSingleUser); 
route.post("/post-user",postUser); 
route.delete("/delete-user",deleteUser); 
route.put("/update-user/:id",updateUser); 


export default route;