import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { postReservation } from "../../../api/requests";
import "./_index.scss";

const Index = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    console.log(values);
    await postReservation(values);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: ` posted successfully!`,
      showConfirmButton: false,
      timer: 1500,
    });
    actions.resetForm();
    navigate("/");
  };
  const formik = useFormik({
    initialValues: {
      personCount: "",
      date: "",
      clock: "",
      email: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <section>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <select
            className="select"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.personCount}
            name="personCount"
          >
            <option value="1">1 person</option>
            <option value="2">2 person</option>
            <option value="3">3 person</option>
            <option value="4">4 person</option>
            <option value="5">5 person</option>
            <option value="6">6 person</option>
            <option value="7">7 person</option>
            <option value="8">8 person</option>
            <option value="9">9 person</option>
            <option value="10">10 person</option>
          </select>
          <span>{formik.errors.personCount}</span>
          <Form.Control
            className="select"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            name="date"
          />
          <span>{formik.errors.date}</span>
          <Form.Select
            className="select"
            aria-label="Default select example"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.clock}
            name="clock"
          >
            <option value="1">6:30 am</option>
            <option value="2">7:00 am</option>
            <option value="3">7:30 am</option>
            <option value="3">8:00 am</option>
            <option value="3">8:30 am</option>
            <option value="3">9:00 am</option>
            <option value="3">9:30 am</option>
            <option value="3">10:00 am</option>
            <option value="3">10:30 am</option>
            <option value="3">11:00 am</option>
            <option value="3">11:30 am</option>
            <option value="3">12:00 am</option>
          </Form.Select>
          <span>{formik.errors.clock}</span>
          <input 
          type="email"
          className="select" 
          placeholder="email daxil edin:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          name="email"
           />
           <span>{formik.errors.email}</span>
          <Button className="button" variant="primary" type="submit">
            Book a table
          </Button>{" "}
        </form>
      </div>
    </section>
  );
};

export default Index;
