const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require("multer");
const uuid = require('uuid');
const fs = require('fs');
const reservationModel = require('./models/reservationModel');
const category_router = require('./routes/categoryRoutes');
const product_router = require('./routes/productRoutes');
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




PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});

// app.post('/reservation', async (req, res) => {
//     const { personCount, date, clock } = req.body;
//   const newReservation = new reservationModel({ 
//     // id: crypto.randomUUID(),
//     personCount: personCount,
//     date: date,
//     clock: clock
//   });
//   await newReservation.save();
//   res.status(201).send("created");
    
    
//   })

//   app.get('/reservation', async (req, res) => {
//     const reservations = await reservationModel.find();
//       res.status(200).send({
//         data: reservations,
//         message: "data get success!",
//       });
//     })

const reservationRoute = require("./routes/reservationRoutes");
app.use("/reservation", reservationRoute);









//Section3 image ------------------------------------------------------------------
app.use(bodyParser.urlencoded({extended:false}))
const DIR = './uploads/';
app.use('/uploads', express.static('uploads'));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuid.v4() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


//Schema
const ImageSchema = new mongoose.Schema({
    profileImg: String
})

const ImageModel = new mongoose.model('Imagees',ImageSchema);


app.get('/',(req,res)=>{
   res.send('welcome to our API!')
})

app.get('/imagees',async(req,res)=>{
    const imagees = await ImageModel.find();
    res.json(imagees);
})

app.post('/imagees',upload.single('profileImg'),async(req,res)=>{
    const url = req.protocol + '://' + req.get('host');
    const newImage = new ImageModel({
        profileImg: url + '/uploads/' + req.file.filename
    })
    newImage.save().then(result => {
        res.status(201).json({
            message: "Image posted successfully!",
            userCreated: newImage
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})
app.delete('/imagees/:id',async(req,res)=>{
    const id = req.params.id;
    const deleted = await ImageModel.findByIdAndDelete(id);
    const idx = deleted.profileImg.indexOf("uploads/");
    const imageName = deleted.profileImg.substr(idx);
    fs.unlinkSync('./'+imageName);
    res.status(200).send({
        message: 'deleted successfully!'
    })
})
//----------------------------------------------------------------------------




//Categories
app.use('/categories/', category_router)
//Products
app.use('/products/', product_router)

