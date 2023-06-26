const UsersModel = require('../models/userModel')
 const bcrypt = require('bcrypt')
 const jwt = require('jsonwebtoken')

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

const usersController = {
    //register
    postRegister: async(req,res)=>{
    const{username,email,password} = req.body;

    const existedUsername = await UsersModel.findOne({username: username});
    const existedMail = await UsersModel.findOne({email: email});
    if (existedUsername) {
        res.json({message: 'username already exists!'});
        return;
    }
    if (existedMail) {
        res.json({message: 'email already used!'});
        return;
    }
    const salt = await bcrypt.genSalt(10); //500ms00
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new Users({
        username: username,
        email: email,
        password: hashedPassword,
        isAdmin: true
    })
    await newUser.save();
    res.json({message: 'user signed up successfully!'});

},
//login
    postLogin: async(req,res)=>{
    const{username,password} = req.body;
    const existedUsername = await UsersModel.findOne({username: username});
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
},
AdminPostLogin : async(req,res)=>{
    const{username,password} = req.body;
    const existedUsername = await UsersModel.findOne({username: username});
    if (!existedUsername) {
        res.json({auth: false,message: 'username not found!'});
        return;
    }
    else{
        if(existedUsername.isAdmin == false){
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
    }
},
getAllUsers : async(req,res)=>{
    const users = await UsersModel.find();
    res.json({users: users});
}
}
module.exports= usersController