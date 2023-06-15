import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllReservations } from "../../api/requests";
import "./_reserv.scss"

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    getAllReservations().then((res) => {
      setReservations(res);
      console.log(res);
    });
  }, []);
  return (
    <>
    <div className="containerData" >
      {reservations &&
        reservations.map((reservation) => {
          return (
              <div key={reservation._id}>
              <h1>Reservation:</h1>
              <p>Person: {reservation.personCount}</p>
              <p>Date: {reservation.date}</p>
              <p>Clock: {reservation.clock}</p>
              </div>
          );
        })}
        </div>
    </>
  );
};

export default Reservations;
