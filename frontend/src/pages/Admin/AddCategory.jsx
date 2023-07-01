import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import { CategoryValidation } from "../../validation/categorySchema";
import { postCategory } from "../../api/requests";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../../context/categoryContext";

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
    navigate('/menu');
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
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="enter name"
          type="text"
          name="name"
        />
        {formik.errors.name && formik.touched.name && (
          <span>{formik.errors.name}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          placeholder="enter description"
          type="text"
          name="description"
        />
        {formik.errors.description && formik.touched.description && (
          <span>{formik.errors.description}</span>
        )}
        <button
          disabled={Object.keys(formik.errors).length !== 0 ? true : false}
          type="submit"
        >
          Add New Category
        </button>
      </form>
    </>
  );
};

export default AddCategory;