import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


const app = express()


app.use(cors({
    credentials:true,
    origin:process.env.ORIGIN
}))

dotenv.config({
    path:"/.env"
})

app.use(express.json({limit:"20KB"}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



export default app