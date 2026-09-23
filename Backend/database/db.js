import mysql from "mysql2";

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "admin",
        database : "new_user"
    });
    db.connect((error) => {
        if(error){
            console.log("Error occured during the connection",error);
        }
        else{
            console.log("Database is connected successfully.");
        }
    })

    export default db;