import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import { ProductValidation } from "../../../validation/productSchema";
import { postProduct } from "../../../api/requests";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../../../context/categoryContext";

const AddProduct = () => {
  const navigate = useNavigate();
  const[products,setProducts] = useState([]);
  const handleSubmit = async(values, actions) => {
    await postProduct(values);
    setProducts([...products,values])
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${values.name} posted successfully!`,
      showConfirmButton: false,
      timer: 1500
    })
    actions.resetForm();
    navigate('/admin/products');
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      price: "",
      categoryID: ""
    },
    validationSchema: ProductValidation,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Helmet>
        <title>Add New Product</title>
      </Helmet>
      <div class="login-box">
  <h2>Add New Product</h2>
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
            value={formik.values.title}
            name="title"
            type="text"
            placeholder="title"
            required=""/>
      <label>Title</label>
      {formik.errors.title && formik.touched.title && (
          <span>{formik.errors.title}</span>
        )}
    </div>
    <div class="user-box">
      <input
      onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            name="price"
            type="number"
            placeholder="price"
            required=""/>
      <label>Price</label>
      {formik.errors.price && formik.touched.price && (
          <span>{formik.errors.price}</span>
        )}
    </div>
    <div class="user-box">
      <input
      onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.categoryID}
            name="categoryID"
            type="text"
            placeholder="categoryID"
            required=""/>
      <label>categoryID</label>
      {formik.errors.categoryID && formik.touched.categoryID && (
          <span>{formik.errors.categoryID}</span>
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

export default AddProduct;