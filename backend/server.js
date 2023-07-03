const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require("multer");
const uuid = require('uuid');
const fs = require('fs');

const reservationModel = require('./models/reservationModel');
const category_router = require('./routes/categoryRoutes');
const product_router = require('./routes/productRoutes');
const user_router = require('./routes/userRoutes');
const Footer_router = require('./routes/footerRoutes')
const Profil_router = require('./routes/profilRoutes')
const about_router = require('./routes/aboutRoutes')
const Team_router = require('./routes/teamRoutes')


const nodemailer = require("nodemailer");
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

//MONGO DATABASE CONNECTION
DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD))
.then(()=> console.log("Mongo DB Connected!"))

PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});


app.use('/',user_router)

const reservationRoute = require("./routes/reservationRoutes");
app.use("/reservation", reservationRoute);

//Categories
app.use('/categories/', category_router)
//Products
app.use('/products/', product_router)
// Footer
app.use('/footer/', Footer_router)
// Profil
app.use('/profil/', Profil_router)
// Team
app.use('/team/', Team_router)
// About
app.use('/about/', about_router)


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



