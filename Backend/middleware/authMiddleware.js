import jwt from "jsonwebtoken";

export const isAuth = (req,res,next) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(400).send({message: "please login"});
    }
    const userInfo = jwt.verify(token, "secretkey");
    if (!userInfo){
        res.status(400).send({message: "please login >>>"});
    }
    req.role = userInfo.userRole === "admin" ? "admin" : userInfo;
    next();
    } catch (e){
        console.log(e);
        res.status(400).send({message: "please login >>>"});
    }
};
   export const isAdmin = (req,res,next) => {
        const role = role.role;

        if (role == "admin") {
            next();
        }else {
            return res.status(401).send ({message: "Not access"});
        }
    };