import React, { useEffect, useState } from "react";
import { deleteFooterByID, getAllFooter } from "../../../api/footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Categories = () => {
  const [footers, setFooters] = useState([]);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllFooter().then((res) => {
      setFooters(res);
      console.log(res);
      // console.log(res)
      // setLoading(false);
    });
  }, []);

  return (
    <>
      <Link to={"/admin/addfooter"}>
        <button className="editbtn marginbtn">Add Footer Image</button>
      </Link>
      <h2>Footer Image</h2>

      <div className="sectionCategorries">
        <div className="container">
          <ul class="responsive-table">
            <li class="table-header">
              <div class="col col-2">
                <h5>Id</h5>
              </div>
              <div class="col col-6">
                <h5>imageURL</h5>
              </div>
              <div class="col col-2">
                <h5>Edit</h5>
              </div>
              <div class="col col-2">
                <h5>Delete</h5>
              </div>
            </li>
            {footers &&
              footers.map((footer) => {
                return (
                  <li key={footer._id} class="table-row">
                    <div class="col col-2" data-label="Job Id">
                      {footer._id}
                    </div>
                    <div class="col col-6" data-label="Customer Name">
                      {footer.imageURL}
                    </div>
                    <div class="col col-2">
                      <Link
                        className="editLink"
                        to={`/admin/footer/${footer._id}`}
                      >
                        <button className="editbtn">Edit</button>
                      </Link>
                    </div>
                    <div class="col col-2">
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
                              deleteFooterByID(footer._id).then((res) => {
                                Swal.fire(
                                  "Deleted!",
                                  "Your file has been deleted.",
                                  "success"
                                );
                              });
                              setFooters(
                                footers.filter((x) => x._id !== footer._id)
                              );
                            }
                          });
                        }}
                        className="editbtn"
                      >
                        Delete
                      </button>
                    </div>
                    {/* <div class="col col-3" data-label="Amount"><Link className="editLink" to={`/admin/categories/${category._id}`}><button className="editbtn">Edit</button></Link></div> */}
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
