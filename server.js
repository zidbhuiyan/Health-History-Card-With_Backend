const express =require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://shakila_miti:h2oh2oh2o@cluster0.rq5w1.mongodb.net/medical-history-card");

app.use("/", require("./routes/contactRoute"));
app.use("/", require("./routes/clientRoute"));

app.listen(3001,function(){
    console.log("express server is running on port 3001");
})