const express = require("express");
const router = express.Router();
const Vaccinestaff = require("../models/vaccinestaffModel");

router.route("/create4").post((req, res) =>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const Vregid = req.body.Vregid;
    const nid = req.body.nid;
    const dateofbirth = req.body.dateofbirth;
    const phonenumber = req.body.phonenumber;
    const hospitalname = req.body.hospitalname;
    const gender = req.body.gender;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    const newVaccinestaff = new Vaccinestaff({
       firstname,
       lastname,
       Vregid,
       nid,
       dateofbirth,
       phonenumber,
       hospitalname,
       gender,
       password,
       confirmpassword
    });

    newVaccinestaff.save();

})

module.exports = router;
