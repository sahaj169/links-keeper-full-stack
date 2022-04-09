const express = require("express")
const cors = require("cors")

// import all routes 
const userRoute = require("./routes/userRoute")
const linksRoute = require("./routes/linksRoute")

const app = express();

// connect to database 
require('./db/db')

const port = process.env.PORT || 5000;

// use middlewares
app.use(express.json());
if(process.env.NODE_ENV==='development'){
    app.use(cors())
}

// routes middlewares 
app.use("/api",userRoute);
app.use("/api",linksRoute);

// listen to server 
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
});