import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./_index.scss";
import { deleteCategoryByID, getAllCategories, getCategoryByID, getCategoryProducts, postProduct } from "../../../api/requests";
import { useCategoryContext } from "../../../context/categoryContext";
import { useFormik } from "formik";

const Index = () => {
  const[categories,setCategories] = useState();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const[loading,setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      setLoading(false);
    });
  },[]); 
  useEffect(() => {
    getCategoryProducts(id).then((res) => {
      setProducts(res);
    });
  }, [id]);
  async function handleSubmit(values, actions) {
    console.log("product data: ", values);
    values.categoryID = id;
    await postProduct(values);
    setProducts([...products, values]);
    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      price: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <>
      <div className="menu">
        <h1>Menu</h1>
      </div>
      {categories &&
            categories.map((category) => {
              return (
      <div key={category._id}>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
        {products.map((product) => (
        <div key={product._id}>
          <p>{product.name}</p>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
        ))}
      </div>
            )})}

      <section className="menuStatic">
        <div></div>
      </section>
    </>
  );
};

export default Index;
