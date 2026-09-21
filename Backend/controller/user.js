
export const getUser = (req,res)=>{
   return  res.send(
    {
        username:"Shital",
        password:"shital1234"
    }
    )
    };

export const postUser = (req,res)=>{
    const {username,password} = req.body;
    res.send({username:username, password:password});
};