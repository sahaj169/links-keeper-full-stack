const express = require("express")
const linksRouter = express.Router();

const { getAllLinks, addLink, updateLink, deleteLink } = require("../controllers/links")

// @route POST /api/addLink
// @desc add new link
// @access Public
linksRouter.post("/addLink",addLink);

// @route GET /api/getLinks
// @desc get links by username
// @access Public
linksRouter.get("/getLinks/:username/:name", getAllLinks);

// @route PUT /api/updateLink
// @desc update link by id
// @access Public
linksRouter.put("/updateLink/:id", updateLink);

// @route PUT /api/deleteLink
// @desc delete link by id
// @access Public
linksRouter.delete("/deleteLink/:id", deleteLink);

module.exports = linksRouter;