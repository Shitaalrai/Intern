import express from "express"
import { login } from "../controller/auth.js"
import { isAuth } from "../middleware/authMiddleware.js";
const route = express.Router()
route.post("/login",isAuth,login)

export default route;