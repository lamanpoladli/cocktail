import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {useFormik} from 'formik'
import * as yup from 'yup'
import { editProduct, getProductByID } from '../../../api/requests';

const EditProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const Validation = yup.object().shape({
    name: yup.string().required("Required"),
    title: yup.string().required("Required"),
    price: yup.number().required("Required"),
    categoryID: yup.string().required("Required"),
  });
  useEffect(() => {
    getProductByID(id).then((res) => {
        setProduct(res);
      formik.name = res.name;
      formik.title = res.title;
      formik.price = res.price;
      formik.categoryID = res.categoryID;
    });
  }, [id]);
  const handleEdit = async (values, actions) => {
    await editProduct(id, values);
    setProducts(values);
    actions.resetForm();
    navigate("/admin/products");
  };
  const formik = useFormik({
    initialValues: {
      name: product.name,
      title: product.title,
      price: product.price,
      categoryID: product.categoryID,
    },
    onSubmit: handleEdit,
    validationSchema: Validation,
  });
  return (
    <>
<div class="login-box">
  <h2>Edit Product</h2>
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
            value={formik.values.title}
            name="title"
            type="text"
            placeholder="title"
            required=""/>
      <label>Title</label>
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
  )
};

export default EditProduct;
