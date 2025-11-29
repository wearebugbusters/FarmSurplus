import { dbConnect } from "./db/index.js";
import app  from "./app.js";
import express from "express"

dbConnect().then(() => {

    app.listen(process.env.PORT, (req, res) => {
        console.log(`Server is listening at http://localhost:${process.env.PORT}/`)
    })
    app.get('/',(req,res,err)=>{
        res.send(`Welcome to FarmPlus!!`)
    })
}).catch((err) => {
    console.log("Database Couldnot be connected", err);
})


