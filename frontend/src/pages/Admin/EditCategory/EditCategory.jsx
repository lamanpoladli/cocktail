import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {useFormik} from 'formik'
import * as yup from 'yup'
import { editCategory, getCategoryByID } from '../../../api/categoryAndProduct';
import "./_editcategory.scss";

const EditCategory = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState({});
  const { id } = useParams();
  const Validation = yup.object().shape({
    name: yup.string().required("Required"),
    description: yup.string().required("Required"),
  });

    async function fetchData(){
     const data = await getCategoryByID(id)
     setCategory(data)
     console.log(data);
     console.log(data.name);
     formik.setValues({
      name: data.name,
      description: data.description,
     })
    }
    useEffect(()=> {
      fetchData()
    },[id])


  const handleSubmit = async (values, actions) => {
    editCategory(id, values);
    setCategory(values);
    actions.resetForm();
    navigate("/admin/categories");
  };
  const formik = useFormik({
    initialValues: {
      name: category.name,
      description: category.description,
    },
    onSubmit: handleSubmit,
    validationSchema: Validation,
  });
  return (
    <>
{category &&  <div class="login-box">
  <h2>{category.name} edit</h2>
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
    </div>
    <button type="submit" href="#">
        
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
  </form>
</div>}
</>
  )
};

export default EditCategory;
