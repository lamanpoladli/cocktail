import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllReservations, editReservation, deleteReservation } from "../../../api/requests";
import "./_reserv.scss";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import Swal from "sweetalert2";
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
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Accepted!`,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleDelete = (e) => {
    let id = e.target.parentNode.getAttribute("id")
    deleteReservation(id);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Deleted!`,
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <>
    <div className="containerData" >
      {reservations &&
        reservations.map((reservation) => {
          return (
              <div key={reservation._id} id={reservation._id}>
              <h1>Reservation:</h1>
              <p><PersonIcon style={{marginRight:"5%"}}/><b>Person:</b> {reservation.personCount} person</p>
              <p><CalendarMonthIcon style={{marginRight:"5%"}}/><b>Date:</b> {reservation.date}</p>
              <p><QueryBuilderIcon style={{marginRight:"5%"}}/><b>Clock:</b> {reservation.clock}</p>
              <p id={reservation.email}><MarkEmailUnreadIcon style={{marginRight:"5%"}}/><b>Email:</b> {reservation.email}</p>
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
