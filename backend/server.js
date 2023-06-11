const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const image_router = require('./routes/imageRoutes');
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

//MONGO DATABASE CONNECTION
DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD))
.then(()=> console.log("Mongo DB Connected!"))


//verify JWT
const verifyJWT = (req,res,next)=>{
    const token = req.headers['x-access-token'];
    if (!token) {
        res.json({message: 'you need token to get data!'})
    }
    else{
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if (err) {
                res.json({auth: false,message: 'authentication failed'});
            }
            else{
                req.userId = decoded.id;
                next();
            }
        })
    }
}

//register
app.post('/api/register',async(req,res)=>{
    const{username,email,password} = req.body;

    const existedUsername = await Users.findOne({username: username});
    const existedMail = await Users.findOne({email: email});
    if (existedUsername) {
        res.json({message: 'username already exists!'});
        return;
    }
    if (existedMail) {
        res.json({message: 'email already used!'});
        return;
    }
    const salt = await bcrypt.genSalt(10); //500ms
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new Users({
        username: username,
        email: email,
        password: hashedPassword,
        isAdmin: false
    })
    await newUser.save();
    res.json({message: 'user signed up successfully!'});

})

//login
app.post('/api/login',async(req,res)=>{
    const{username,password} = req.body;
    const existedUsername = await Users.findOne({username: username});
    if (!existedUsername) {
        res.json({auth: false,message: 'username not found!'});
        return;
    }
    else{
        const isValid = await bcrypt.compare(password, existedUsername.password);
        const id = existedUsername._id;
        //username password + 
        //access token - JWT
        //refresh token
        const token = jwt.sign({id}, process.env.SECRET_KEY, {
            expiresIn: '7d'
        })
        if (!isValid) {
            res.json({auth: false, message: 'password is incorrect!'});
        }
        else{
            res.json({auth: true, token: token,user: {
                id: existedUsername._id,
                username: existedUsername.username,
                email: existedUsername.email,
                isAdmin: existedUsername.isAdmin
            },message: 'signed in successfully!'});
        }
    }
})

//users - get
app.get('/api/users',verifyJWT,async(req,res)=>{
    const users = await Users.find();
    res.json({users: users});
})


app.use('/api/images/', image_router)

PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});