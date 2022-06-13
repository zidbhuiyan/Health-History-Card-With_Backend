const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctorModel");

router.route("/doctorLogin").post((req, res) =>{

    const Docregid = req.body.Docregid;
    const Dpassword = req.body.Dpassword;

    Doctor.findOne({Docregid: Docregid}, (err,user) => {
        if(user){

            console.log(user)

            if(Dpassword === user.Dpassword){
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