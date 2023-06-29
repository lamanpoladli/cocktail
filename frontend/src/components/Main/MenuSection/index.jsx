import React, { useEffect, useState } from "react";
import "./_index.scss";
import { getAllCategories } from "../../../api/requests";
import { Link } from "react-router-dom";

const Index = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      // console.log(res)
      setLoading(false);
    });
  }, []);
  return (
    <section className="MenuCategories">
      <div className="row">
        <div className="col12">
          <h6>This week’s specials</h6>
          <h1>We recommend</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit<br></br>{" "}
            sed eiu smod tempor incididunt ut labore etdo
          </p>
        </div>

        <div className="col6">
          {categories &&
            categories.map((category) => {
              return (
                <>
                  <div className="categoryDiv" key={category._id}>
                    <div>
                      <h4>{category.name}</h4>
                      <h6>{category.description}</h6>
                    </div>
                    <div>
                    <Link to={"/menu"}><button class="button-57" role="button"><span class="text">View Details</span><span>{category.name}</span></button></Link>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="col6">
            <img src="https://bridge269.qodeinteractive.com/wp-content/uploads/2019/10/single-img-2.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Index;
