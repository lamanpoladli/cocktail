import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { editProduct, getProductByID } from "../../../api/categoryAndProduct";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(id);
  async function fetchData() {
    const datas = await getProductByID(id);
    setProduct(datas.data);
    console.log(datas.data);
    formik.setValues({
      name: datas.data.name,
      title: datas.data.title,
      price: datas.data.price,
      categoryID: datas.data.categoryID,
    });
  }
  useEffect(() => {
    fetchData();
  }, [id]);

  const handleSubmit = async (values, actions) => {
    editProduct(id, values);
    setProduct(values);
    navigate("/admin/products");
    actions.resetForm();
  };
  const ServiceSchema = Yup.object().shape({
    name: Yup.string().required(),
    title: Yup.string().required(),
    price: Yup.number().required(),
    categoryID: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      name: product.name,
      title: product.title,
      price: product.price,
      categoryID: product.categoryID,
    },
    onSubmit: handleSubmit,
    validationSchema: ServiceSchema,
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
              required=""
            />
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
              required=""
            />
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
              required=""
            />
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
              required=""
            />
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
  );
};

export default EditProduct;
