import React, { useState } from "react";
import "./_index.scss";

const Index = () => {
  return (
    <>
      <div className="wishlist">
        <h1>Wishlist</h1>
      </div>
      <section className="WishlistSec">
        <div class="ag-format-container">
          <div className="some">
          <div class="ag-courses_box">
            {JSON.parse(localStorage.getItem("wishlist")).map((x) => (
              <div key={x._id} class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">{x.name}</div>

                  <div class="ag-courses-item_date-box">
                    {x.title}
                    <div>
                      <span style={{ color: "black", fontSize: "25px" }}>
                        Price:{" "}
                      </span>
                      <span
                        style={{
                          color: "black",
                          fontSize: "20px",
                          marginTop: "15%",
                        }}
                      >
                        {x.price}$
                      </span>
                    </div>
                    <div>
                      <button
                       onClick={async()=>{
                localStorage.removeItem('wishlist');
              }} 
              class="button-48" role="button">
                        <span class="text">Delete Product<br></br> from Wishlist</span>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
