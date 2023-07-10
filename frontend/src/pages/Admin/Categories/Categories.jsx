import React, { useEffect, useState } from "react";
import { deleteCategorytByID, getAllCategories } from "../../../api/categoryAndProduct";
import "./_categories.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Input } from "antd";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(loading);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      // console.log(res)
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Link to={"/admin/addcategory"}>
        <button className="editbtn marginbtn">Add Category</button>
      </Link>
      <Input
        className="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
    
      <h2>Categories</h2>

      <div className="sectionCategorries">
        <div className="container">
          <ul class="responsive-table">
            <li class="table-header">
              <div class="col col-1">
                <h5>Id</h5>
              </div>
              <div class="col col-2">
                <h5>Name</h5>
              </div>
              <div class="col col-3">
                <h5>Description</h5>
              </div>
              <div class="col col-3">
                <h5>Edit</h5>
              </div>
              <div class="col col-3">
                <h5>Delete</h5>
              </div>
            </li>
            {categories &&
              categories
                .filter((item) => {
                  return search.toLocaleLowerCase() === ""
                    ? item
                    : item.name.toLocaleLowerCase().includes(search);
                })
                .map((category) => {
                  return (
                    <li key={category._id} class="table-row">
                      <div class="col col-1" data-label="Job Id">
                        {category._id}
                      </div>
                      <div class="col col-2" data-label="Customer Name">
                        {category.name}
                      </div>
                      <div class="col col-3" data-label="Amount">
                        {category.description}
                      </div>
                      <div class="col col-3" data-label="Amount">
                        <Link
                          className="editLink"
                          to={`/admin/categories/${category._id}`}
                        >
                          <button className="editbtn">Edit</button>
                        </Link>
                      </div>
                      <div class="col col-3" data-label="Amount">
                        <button
                          onClick={() => {
                            Swal.fire({
                              title: "Are you sure?",
                              text: "You won't be able to revert this!",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Yes, delete it!",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                deleteCategorytByID(category._id).then(
                                  (res) => {
                                    Swal.fire(
                                      "Deleted!",
                                      "Your file has been deleted.",
                                      "success"
                                    );
                                  }
                                );
                                setCategories(
                                  categories.filter(
                                    (x) => x._id !== category._id
                                  )
                                );
                              }
                            });
                          }}
                          className="editbtn"
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;
