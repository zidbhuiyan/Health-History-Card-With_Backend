const express = require("express");
const router = express.Router();
const Reportstaff = require("../models/reportstaffModel");

router.route("/create3").post((req, res) =>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const Rregid = req.body.Rregid;
    const nid = req.body.nid;
    const dateofbirth = req.body.dateofbirth;
    const phonenumber = req.body.phonenumber;
    const hospitalname = req.body.hospitalname;
    const gender = req.body.gender;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    const newReportstaff = new Reportstaff({
       firstname,
       lastname,
       Rregid,
       nid,
       dateofbirth,
       phonenumber,
       hospitalname,
       gender,
       password,
       confirmpassword
    });

    newReportstaff.save();

})

module.exports = router;
