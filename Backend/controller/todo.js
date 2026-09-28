import db from "../database/db.js";

export const postTask = (req,res) => {
    try{
        const {title,description,priority} = req.body;
        const q = `insert into todolist(title,description,priority) value(?,?,?)`;

        db.query(q, [title,description,priority], (err,result)=>{
            if (err) {
                return res.send({message: "Error while executing query",error:err});
            }
            return res.send({
                message: "task is added",
                result: result,
            });
        });
    }catch(err){
        console.log(err);
        
    }
};

export const getTask = (req,res) => {
    try{
        const q = `Select * from todolist`;

        db.query(q, (err,result)=>{
            if (err) {
                return res.send({message: "Error while fetching data",error:err});
            }
            return res.send({
                message: "task is Fetched",
                data: result,
            });
        });
    }catch(err){
        console.log(err);    
    }
};

export const deleteTask = (req,res) => {
    try{
        const {id} = req.params;
        const q = `Delete from todolist where id = ?`;

        db.query(q, [id], (err,result)=>{
            if (err) {
                return res.send({message: "Error while executing query",error:err});
            }
            return res.send({
                message: "task is Deleted.",
                data: result,
            });
        });
    }catch(err){
        console.log(err);
        
    }
};

export const updateTask = (req, res) => {
  try {
    const {title,description,priority} = req.body;
    const {id} = req.params;
    const q = `update todolist set title=?,description=?,priority=? where id=?`;

    db.query(q, [title,description,priority,id], (err, data) => {
      if (err) {
        return res.send({ message: "Error while executing query", error: err });
      }
      return res.send({
        message: "Task updated successfully",
        data: data,
      });
    });
  } catch (err) {
    console.log(err);
  }
};