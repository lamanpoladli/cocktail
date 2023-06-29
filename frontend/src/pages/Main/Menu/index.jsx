import React, { useEffect, useState } from "react";

import "./_index.scss";
import { getAllCategories, getAllProducts, } from "../../../api/requests";


const Index = () => {
  const[categories,setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const[loading,setLoading] = useState(true);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      // console.log(res)
      setLoading(false);
    });
  },[]); 
  useEffect(() => {
    getAllProducts().then((res) => {
      // console.log(res);
      // console.log(categories);
      setProducts(res);
    });
  }, []);
  

  return (
    <>
      <div className="menu">
        <h1>Menu</h1>
      </div>
      <section className="menuSec">
            <div className="menuRow">
              <div className="col12">
              {categories &&
            categories.map((category) => {
              return (
                <>
                <div key={category._id} className="top">
                <h5>{category.description}</h5>
                <h1>{category.name}</h1>
                </div>
                {products.filter(x=>x.categoryID === category._id).map((product) => (
                <div key={product._id} className="bottom">
                  <h4>{product.name}<h6>{
                     Array.from({ length: (100-(product.name.length+product.price.toString().length+1)) }, (_, i) => <span key={i}>.</span>)

                    }<h4>${product.price}</h4></h6></h4>
                  <p>{product.title}</p>
                </div>
                ))}
                </>
                )})}
              </div>
            </div>
      </section>

      <section className="menuStatic">
        <div></div>
      </section>
    </>
  );
};

export default Index;
