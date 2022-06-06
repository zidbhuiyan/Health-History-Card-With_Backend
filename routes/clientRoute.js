const express = require("express");
const router = express.Router();
const Client = require("../models/clientModel");

router.route("/create1").post((req, res) =>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const birthid = req.body.birthid;
    const nid = req.body.nid;
    const hid = req.body.hid;
    const dateofbirth = req.body.dateofbirth;
    const phonenumber = req.body.phonenumber;
    const fathersname = req.body.fathersname;
    const fathersnid = req.body.fathersnid;
    const mothersname = req.body.mothersname;
    const mothersnid = req.body.mothersnid;
    const presentaddress = req.body.presentaddress;
    const permanentaddress = req.body.permanentaddress;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    const gender = req.body.gender;
    const emergphonenumber = req.body.emergphonenumber;
    const newClient = new Client({
       firstname,
       lastname,
       birthid,
       nid,
       hid,
       dateofbirth,
       phonenumber,
       fathersname,
       fathersnid,
       mothersname,
       mothersnid,
       presentaddress,
       permanentaddress,
       password,
       confirmpassword,
       gender,
       emergphonenumber
    });

    newClient.save();

})

module.exports = router;