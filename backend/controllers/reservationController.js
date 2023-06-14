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
        const { personCount, date, clock } = req.body;
        const newReservation = new reservationModel({ 
          // id: crypto.randomUUID(),
          personCount: personCount,
          date: date,
          clock: clock
        });
        await newReservation.save();
        res.status(201).send("created");
          
    },
   
};

module.exports = reservationController