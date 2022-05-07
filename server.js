const express = require("express")
const cors = require("cors")

// import all routes 
const linksRoute = require("./routes/linksRoute")

const app = express();

// connect to database 
require('./db/db')

const port = process.env.PORT || 5000;

// use middlewares
app.use(express.json());

// use cors for setting the origin of the request 
app.use(cors({origin:true}))

// routes middlewares 
app.use("/api",linksRoute);

// listen to server 
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
});