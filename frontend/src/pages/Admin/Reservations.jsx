import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllReservations, editReservation, deleteReservation } from "../../api/requests";
import "./_reserv.scss";
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';


const Reservations = () => {


  const [reservations, setReservations] = useState([]);
  const [isAccepted, setIsAccepted] = useState(false)
  useEffect(() => {
    getAllReservations().then((res) => {
      setReservations(res);
      
    });
  }, []);

  const handleClick = (e) => {
    let id = e.target.parentNode.getAttribute("id")
    let email = e.target.previousElementSibling.previousElementSibling.getAttribute("id")
    editReservation(id,{isAccepted:true,email:email})
    setIsAccepted(true);
  }

  const handleDelete = (e) => {
    let id = e.target.parentNode.getAttribute("id")
    deleteReservation(id);
  }
  return (
    <>
    <div className="containerData" >
      {reservations &&
        reservations.map((reservation) => {
          return (
              <div key={reservation._id} id={reservation._id}>
              <h1>Reservation:</h1>
              <p>Person: {reservation.personCount}</p>
              <p>Date: {reservation.date}</p>
              <p>Clock: {reservation.clock}</p>
              <p id={reservation.email}>Email: {reservation.email}</p>
              <p>isAccepted: {reservation.isAccepted ? 'Accepted' : 'Not Accepted'}</p>
        
              <button onClick={handleClick}>Accept</button>
              <button onClick={handleDelete}>Delete</button>
              </div>
          );
        })}
        </div>
    </>
  );
};

export default Reservations;
