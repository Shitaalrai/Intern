import db from "../database/db.js";
import bcrypt from "bcryptjs";

export const getUser = (req, res) => {
    try{
         const q = `select * from user`;

    db.query(q,(err,data)=>{
        if(err){
            console.log(err);
            return res.send({message: "error while fetching datas."});
        }
        return res.send({
            message: "Data successfully fetched.",
            data : data,
        })
    })
    }catch(err){
        console.log(err);
    }
};

export const getSingleUser = (req, res) => {
    try{
      const {id} = req.params;
         const q = `select * from user where id = ?`;

    db.query(q,[id],(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).send({message: "error while fetching datas."});
        }
        return res.status(200).send({
            message: "Data successfully fetched.",
            data : data[0],
        })
    })
    }catch(err){
        console.log(err);
    }
};

export const postUser = (req, res) => {
  try {
    const { name, phone, address, email, password } = req.body;
    const q = `insert into user(name,phone,email,password,address) values(?,?,?,?,?)`;

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password,salt);

    db.query(q, [name,phone,email,hashPassword,address], (err, result) => {
      if (err) {
        return res.send({ message: "Error while executing query", error: err });
      }
      return res.send({
        message: "User registred successfully",
        result: result,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = (req, res) => {
  try {
    const {id} = req.body;
    const q = `delete from user where id=?`;

    db.query(q, [id], (err, data) => {
      if (err) {
        return res.send({ message: "Error while executing query", error: err });
      }
      return res.send({
        message: "User deleted successfully",
        data: data,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (req, res) => {
  try {
    const {name,address,phone,email,password} = req.body;
    const {id} = req.params;
    const q = `update user set name=?,password=?,email=?,address=?,phone=? where id=?`;

    db.query(q, [name,password,email,address,phone,id], (err, data) => {
      if (err) {
        return res.send({ message: "Error while executing query", error: err });
      }
      return res.send({
        message: "User updated successfully",
        data: data,
      });
    });
  } catch (err) {
    console.log(err);
  }
};
