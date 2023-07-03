import React, { useEffect, useState } from "react";
import { deleteAboutByID, getAllAbouts } from "../../../api/about";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./_index.scss"

const Index = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(loading);
  useEffect(() => {
    getAllAbouts().then((res) => {
      setAbouts(res);
      // console.log(res)
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/* <Link to={"/admin/addcategory"}>
        <button className="editbtn marginbtn">Add Category</button>
      </Link> */}

      <h2>About</h2>

      <div className="sectionAdminAbout">
          {abouts &&
            abouts.map((about) => {
              return (
                  <div key={about._id} class="card">
                    <p class="card-title">{about.name}</p>
                    <p class="card-title">{about.title}</p>
                    <p class="small-desc">
                    {about.description}
                    </p>
                    <p>URL: {about.imageURL}</p>
                    <Link
                          className="editLink"
                          to={`/admin/about/${about._id}`}
                        >
                          <button className="editbtn">Edit</button>
                        </Link>
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
                                deleteAboutByID(about._id).then(
                                  (res) => {
                                    Swal.fire(
                                      "Deleted!",
                                      "Your file has been deleted.",
                                      "success"
                                    );
                                  }
                                );
                                setAbouts(
                                  abouts.filter(
                                    (x) => x._id !== about._id
                                  )
                                );
                              }
                            });
                          }}
                          className="editbtn deleteAbout"
                        >
                          Delete
                        </button>
                    <div class="go-corner">
                      <div class="go-arrow">→</div>
                    </div>
                  </div>
              );
            })}
        </div>
    </>
  );
};

export default Index;
