import React, { useState } from "react";
import { useFormik } from "formik";
import { postFooter } from "../../../api/footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [footers, setFooters] = useState([]);
  const handleSubmit = async (values, actions) => {
    await postFooter(values);
    setFooters([...footers, values]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${values.name} posted successfully!`,
      showConfirmButton: false,
      timer: 1500,
    });
    actions.resetForm();
    navigate("/admin/footer");
  };
  const formik = useFormik({
    initialValues: {
      imageURL: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <div class="login-box">
      <form onSubmit={formik.handleSubmit}>
        <div class="user-box">
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageURL}
            name="imageURL"
            type="text"
            placeholder="imageURL"
            required=""
          />
          <label>Name</label>
          {formik.errors.imageURL && formik.touched.imageURL && (
            <span>{formik.errors.imageURL}</span>
          )}
        </div>
        <button type="submit" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Index;
