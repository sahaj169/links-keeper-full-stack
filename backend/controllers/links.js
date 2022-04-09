const Links = require("../models/links");
// const {validationResult} = require('express-validator')

const getAllLinks = async(req,res) =>{

    try {
        const {username} = req.params

        // get links by username 
        const links = await Links.find({username});
        if(!links){
            return res.status(400).json({error : "No links"})
        }

        res.json(links);
    } catch (error) {
        return res.status(500).json({error});
    }
}

const addLink = async(req,res) => {
    
    // const errors = validationResult(req)

    // if(!errors.isEmpty()){
    //     return res.status(401).json({errors:errors.array()});
    // }
    
    try {
        const {link,name,username}=req.body

        // add new link to db
        const newLink = new Links({
            name,
            link,
            username
        });
        await newLink.save();
        res.status(200).json({msg:"Link saved successfully"});
    } catch (error) {
        res.status(500).json({error});
    }
}

const updateLink = async(req,res) => {
    
    try {
        const linkId = req.params.id;

        // update link using id
        const updatedLink = {
            name : req.body.name,
            link : req.body.link
        }
        await Links.findByIdAndUpdate(linkId,updatedLink) ;
        
        res.status(200).json({msg:"Links Updated"});

    } catch (error) {
        res.status(500).json({error});
    }
}

const deleteLink = async(req,res) => {
    const linkId = req.params.id;

    try {

        // delete links using id 
        await Links.findByIdAndDelete(linkId);
        
        res.status(200).json({msg:"Link deleted successfully"});
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = {getAllLinks, addLink, updateLink,deleteLink}