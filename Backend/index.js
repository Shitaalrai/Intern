import express from "express"
import user from "./router/user.route.js"
import db from "./database/db.js";

const app = express();
const host = 5000;
app.use(express.json());
app.use("/api",user)
// app.get("/get-user",(req,res)=>{
//     res.send(
//     {
//         username:"Shital",
//         password:"shital1234"
//     }
//     )
//     });

// app.post("/post-user",(req,res)=>{
//     res.send("hello this is the Post package.")
// })



app.listen(host,()=>{
    console.log(`Server is running at http://localhost:${host}`);
});