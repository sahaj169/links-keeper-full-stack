const User = require("../models/user");
const addUser = async (req, res) => {


    try {
        const { name, username } = req.body
        // check if user exist with username 
        const checkUserusername = await User.findOne({username })
        if (checkUserusername) {
            return res.json({ message: "User already exist"})
        }
        console.log(checkUserusername)

        

        // create user in db 
        const newUser = new User({
            name, username
        });

        const response = await newUser.save();
        // const response = await newUser.save(function(err,user){
        //     if(err){
        //         res.json({message:err})
        //     }else{
        //         res.json({user})
        //     }
        // });
        console.log(response)
        return res.json({ message: "User already exist", "user": response })


    } catch (error) {
        res.json({ error });
    }
}

const loginUser = async (req, res) => {


    try {
        const { username } = req.body

        // check if user exist with username 
        const checkUserusername = await User.findOne({ username })
        if (!checkUserusername) {
            return res.json({ message: "User doesen't exist" })
        }

        console.log(response)
        return res.json({ message: "Login SuccessFull!", "user": checkUserusername })


    } catch (error) {
        res.json({ error });
    }
}

const getUser = async (req, res) => {
    try {
        const username = req.params.username

        // find user in db by username
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ err: "user doesn't exist" })
        }
        res.status(200).json(user)
    } catch (error) {
        res.json({ error });
    }
}

module.exports = { addUser, getUser,loginUser }