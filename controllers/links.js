const Links = require("../models/links");

const addLink = async(req,res) => {
    
    try {
        const {name,username,title,link}=req.body
        // add new link to db
        const newLink = new Links({
            name,
            username,
            link,
            title
        });
        await newLink.save();
        res.status(200).json({message:"Link saved successfully"});
    } catch (error) {
        res.status(500).json({error});
    }
}

const getAllLinks = async(req,res) =>{

    try {
        const {username,name} = req.params

        // get links by username and name
        const links = await Links.find({username,name});
        if(!links){
            return res.status(400).json({error : "No links"})
        }

        res.json(links);
    } catch (error) {
        return res.status(500).json({error});
    }
}

const updateLink = async(req,res) => {
    
    try {
        const linkId = req.params.id;

        // update link using id
        const updatedLink = {
            name : req.body.name,
            username : req.body.username,
            link : req.body.link,
            title:req.body.title
        }
        await Links.findByIdAndUpdate(linkId,updatedLink) ;
        
        res.status(200).json({message:"Links Updated"});

    } catch (error) {
        res.status(500).json({error});
    }
}

const deleteLink = async(req,res) => {
    const linkId = req.params.id;

    try {

        // delete links using id 
        await Links.findByIdAndDelete(linkId);
        
        res.status(200).json({message:"Link deleted successfully"});
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = {getAllLinks, addLink, updateLink,deleteLink}