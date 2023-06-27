var nodemailer = require("nodemailer")
const reservationModel = require('../models/reservationModel');

const reservationController = {
  get: async (req, res) => {
    const reservations = await reservationModel.find();
      res.status(200).send({
        data: reservations,
        message: "data get success!",
      });
      
},
    post: async (req, res) => {
        const { personCount, date, clock, isAccepted, email } = req.body;
        
        const newReservation = new reservationModel({ 
          // id: crypto.randomUUID(),
          personCount: personCount,
          date: date,
          clock: clock,
          isAccepted: isAccepted,
          email: email
        });
        await newReservation.save();
        res.status(201).send("created");
          
    },
    edit: async (req, res) => {
      const id = req.params.id;
      const { personCount, date, clock, isAccepted, email } = req.body;

      try{
        const transporter = nodemailer.createTransport({
          service:"gmail",
          auth:{
            user:"lamanpoladli@gmail.com",
            pass:"mavyynkqmoardpqe"
          }
        });

        const mailOptions = {
          from: "lamanpoladli@gmail.com",
          to: email,
          subject: "Reservation",
          html: "<h3>Your reservation is accepted!</h3>"
        }
        console.log(email)
        transporter.sendMail(mailOptions,(error, info)=>{
          if(error){
            console.log("Error: " + error)
          }
          else{
            console.log("Email sent " + info.response)
            res.status(201).json({status:201,info})
          }
        })
      }
      catch(error){
        res.status(401).json({status:401,error})
      }
      const existedReservation = await reservationModel.findByIdAndUpdate(id, {
        personCount: personCount,
        date: date,
        clock: clock,
        isAccepted: isAccepted,
        email: email
      });
      if (existedReservation == undefined) {
        res.status(404).send("reservation not found!");
      } else {
        res.status(200).send(`updated successfully!`);
      }
    },
    delete: async (req, res) => {
      const id = req.params.id;
      const reservation = await reservationModel.findByIdAndDelete(id);
      if (reservation === undefined) {
        res.status(404).send("reservation not found");
      } else {
        res.status(203).send({
          data: reservation,
          message: "reservation deleted successfully",
        });
      }
    },
};

module.exports = reservationController