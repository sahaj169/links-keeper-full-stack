const mongoose = require("mongoose")

// const uri = "mongodb+srv://teachbot:teachbot@cluster0.3jmmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose.connect(uri, {useUnifiedTopology:true, useNewUrlParser :true})

// var connection = mongoose.connection()

// connection.on("connected" ,() =>{
//     console.log("Database connected Successfully");
// })

// connection.on("error", ()=>{
//     console.log("Error while connecting ....");
// })
mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));


module.exports;