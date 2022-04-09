const mongoose = require("mongoose")

const LinksSchema = mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    link : {
        type: String,
        required : true
    },
    username:{
        type:String,
        required:true
    },
    
});

const Links = mongoose.model("link", LinksSchema);

module.exports = Links;