import React, { useEffect, useState } from "react";
import "./_index.scss";
import { deleteCategoryByID, getAllCategories } from "../../../api/requests";
import { useCategoryContext } from "../../../context/categoryContext";

const Index = () => {
  const[categories,setCategories] = useState();
  const[loading,setLoading] = useState(true);
  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      setLoading(false);
    });
  },[]);
  function handleSearch(e) {
    getAllCategories(e.target.value).then((res) => {
      setCategories(res);
    });
  }
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
      </div>
            )})}

      <section className="menuStatic">
        <div></div>
      </section>
    </>
  );
};

export default Index;
