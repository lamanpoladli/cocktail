import React, { useEffect, useState } from "react";
import "./_index.scss";

const Index = () => {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    let wishList = JSON.parse(localStorage.getItem("wishlist"));
    wishList = wishList.filter((x) => x._id !== e.target.id);
    // console.log(wishList);
    localStorage.setItem("wishlist", JSON.stringify(wishList));
    setIsClicked(true);
    console.log("slaam")
  };

  useEffect(() => {
    // console.log("Lemannnnn");
    setData(JSON.parse(localStorage.getItem("wishlist")));
    setIsClicked(false);
  }, [isClicked]);
  return (
    <>
      <div className="wishlist">
        <h1>Wishlist</h1>
      </div>
      {/* <section className="WishlistSection">
        <div className="rowWishlist">
          {data.map((x) => (
            <div key={x._id} class="cardBox">
              <div className="cardWishlist">
                <div class="h4">{x.name}</div>

                <div class="content">
                  <div class="h3">Price: {x.price}$</div>
                  <p>{x.title}</p>

                  <button id={x._id}
                       onClick={deleteHandler} class="buttonWishlist">Delete from Wishlist!</button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section className="WishlistSection">
        <div className="rowWishlist">
        {data.map((x) => (
          <div key={x._id} class="card-container">
            <div class="card">
              <div class="front-content" id={x._id} onClick={deleteHandler}>
                <p>{x.name}</p>
              </div>
              <div class="content">
                <p class="heading">Price: {x.price}$</p>
                <p>
                {x.title}
                </p>
                <button class="buttonWishlist">Delete from Wishlist!</button>
              </div>
            </div>
          </div>
          
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
