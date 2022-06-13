const express = require("express");
const router = express.Router();
const Reportstaff = require("../models/reportstaffModel");

router.route("/reportStaffLogin").post((req, res) =>{

    const Rregid = req.body.Rregid;
    const password = req.body.password;

    Reportstaff.findOne({Rregid: Rregid}, (err,user) => {
        if(user){

            console.log(user)

            if(password === user.password){
                res.send({message: "logindone", user: user})
            }

            else{
                res.send({message: "passwordisIncorrect"}) 
            }

        }
        else{
            res.send({message: "userDoesNotExist"})
        }
    })

})

module.exports = router;