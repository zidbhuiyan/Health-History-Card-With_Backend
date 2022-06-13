const express = require("express");
const router = express.Router();
const Vaccinestaff = require("../models/vaccinestaffModel");

router.route("/vaccineStaffLogin").post((req, res) =>{

    const Vregid = req.body.Vregid;
    const password = req.body.password;

    Vaccinestaff.findOne({Vregid: Vregid}, (err,user) => {
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