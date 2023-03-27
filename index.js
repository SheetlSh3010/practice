const express=require("express")
const { connection } = require("./db")
const { authenticate } = require("./middlewares/authenticate.middleware")
const { noteRouter } = require("./routes/Note.routes")
const { userRouter } = require("./routes/User.routes")

const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})
app.use("/users",userRouter)
app.use(authenticate)
app.use("/notes",noteRouter)
app.listen(8080,async()=>{
   try {
    await connection
    console.log("connected to db")
   } catch (error) {
     console.log(error)
   }
   console.log("server is running")
})