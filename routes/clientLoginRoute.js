const express = require("express");
const router = express.Router();
const Client = require("../models/clientModel");

router.route("/clientLogin").post((req, res) =>{
    const hid = req.body.hid;
    const password = req.body.password;

    Client.findOne({hid: hid}, (err,user) => {
        if(user){

            if(password === user.password){
                res.send({message: "login done", user: user})
            }

            else{
                res.send({message: "PasswordisIncorrect"}) 
            }

        }
        else{
            res.send({message: "userDoesNotExist"})
        }
    })

})

module.exports = router;