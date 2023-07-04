import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import { CategoryValidation } from "../../../validation/categorySchema";
import { postCategory } from "../../../api/categoryAndProduct";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../../../context/categoryContext";

const AddCategory = () => {
  const navigate = useNavigate();
  const[categories,setCategories] = useState([]);
  const handleSubmit = async(values, actions) => {
    await postCategory(values);
    setCategories([...categories,values])
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${values.name} posted successfully!`,
      showConfirmButton: false,
      timer: 1500
    })
    actions.resetForm();
    navigate('/admin/categories');
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: CategoryValidation,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Helmet>
        <title>Add New Category</title>
      </Helmet>
      <div class="login-box">
  <h2>Add New Category</h2>
  <form onSubmit={formik.handleSubmit}>
    <div class="user-box">
      <input
      onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            type="text"
            placeholder="Name"
            required=""/>
      <label>Name</label>
      {formik.errors.name && formik.touched.name && (
          <span>{formik.errors.name}</span>
        )}
    </div>
    <div class="user-box">
    <input
      onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            name="description"
            type="text"
            placeholder="Description"
            required=""/>
      <label>Description</label>
      {formik.errors.description && formik.touched.description && (
          <span>{formik.errors.description}</span>
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
    </>
  );
};

export default AddCategory;