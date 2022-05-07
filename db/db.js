const mongoose = require("mongoose")

const uri = "mongodb+srv://fullstackmernsrm:fullstackmernsrm@cluster0.t1te7.mongodb.net/linkskeeper?retryWrites=true&w=majority";

// const uri = "mongodb://localhost:27017/linkeeper";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));


module.exports;
