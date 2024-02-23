const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json());

// mongoose.connect("mongodb+srv://Maisha:Maisha@2024@cluster0.fw5nchn.mongodb.net/maisha_dev?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://Maisha:Maisha%402024@cluster0.fw5nchn.mongodb.net/maisha_dev?retryWrites=true&w=majority")

app.get("/getusers",(req,res)=>{
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
        res.json(err)
    })
})

app.post("/createUser", async (req,res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
})



app.listen(3001, ()=>{
    console.log('Server is Running');
})