import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllReservations } from "../../api/requests";

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
      {reservations &&
        reservations.map((reservation) => {
          return (
            <div key={reservation._id}>
              <h1>{reservation.personCount}</h1>
              <p>{reservation.date}</p>
              <p>{reservation.clock}</p>
            </div>
          );
        })}
    </>
  );
};

export default Reservations;
