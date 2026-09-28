import { json } from "express";
import db from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  try {
    const { email, password } = req.body;
    const q = `Select * from user where email =?`;

    db.query(q, [email], (err, data) => {
      if (err) {
        return res.status(400).send({ message: "Error while fetching data" });
      }
      if (data.length == 0) {
        return res.status(404).send({ message: "User not found" });
      }

      const isPasswordMatch = bcrypt.compareSync(password, data[0].password);
      if (isPasswordMatch) {
        const token = jwt.sign(
          {
            userID: data[0].id,
            userUsername: data[0].name,
            userRole: data[0].role,
          },
          "secretkey",
        );

        console.log(token);

        const { password, ...others } = data[0];
        return res
          .status(200)
          .send({ message: "Login successfully.", user: others , token : token });
      } else {
        return res.status(400).send({
          message: "Email or Password doesnot match.",
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
};
