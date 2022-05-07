const mongoose = require("mongoose")

// structure of the document in the database 

const LinksSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    title : {
        type : String,
        required: true,
    },
    link : {
        type: String,
        required : true
    }  
});

// creating a collection
const Links = mongoose.model("link", LinksSchema);

module.exports = Links;