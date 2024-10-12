import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/restaurant_db')
.then(()=>{
  console.log("con success")
})
.catch((err)=>{
  console.log("con fail" + err)
})

const dbSchema = {
    username: String,
    email: String, 
    message: String
}

var db = mongoose.model('db', dbSchema);


app.post("/submit", function(req, res){ 
    const newdb = new db ({
        username: req.body.username,
        email: req.body.email,
        message: req.body.message
    })
    newdb.save(function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Successfully saved to db");
        }
    });
});
