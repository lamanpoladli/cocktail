import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./_index.scss";
import { getAllCategories, getAllProducts } from "../../../api/requests";
import Swal from "sweetalert2";

const Index = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      // console.log(res)
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    getAllProducts().then((res) => {
      // console.log(res);
      // console.log(categories);
      setProducts(res);
    });
  }, []);

  const handleClick = (e) => {
    const id = e.target.id;
    console.log(id);
    if (id !== null) {
      const product = products.find((x) => x._id === id);
      if (localStorage.getItem("wishlist")) {
        let wishListStorage = JSON.parse(localStorage.getItem("wishlist"));
        if (wishListStorage.find((x) => x._id === product._id) !== undefined) {
          const index = wishListStorage.indexOf(product);
          wishListStorage.splice(index, 1);
        } else {
          wishListStorage.push(product);
        }
        localStorage.setItem("wishlist", JSON.stringify(wishListStorage));
      } else {
        localStorage.setItem("wishlist", JSON.stringify([product]));
      }
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Əlavə olundu!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

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
                    {products
                      .filter((x) => x.categoryID === category._id)
                      .map((product) => (
                        <>
                          <div key={product._id} className="bottom">
                            {
                              <FavoriteBorderIcon
                                style={{ width: "50px", height: "50px" }}
                                id={product._id}
                                onClick={handleClick}
                              />
                            }
                            <h4>
                              {product.name}
                              <h6>
                                {Array.from(
                                  {
                                    length:
                                      100 -
                                      (product.name.length +
                                        product.price.toString().length +
                                        1),
                                  },
                                  (_, i) => (
                                    <span key={i}>.</span>
                                  )
                                )}
                                <h4>${product.price}</h4>
                              </h6>
                            </h4>
                            <p>{product.title}</p>
                          </div>
                        </>
                      ))}
                  </>
                );
              })}
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
