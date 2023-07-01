import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../api/requests';
import "./_categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    const[categories,setCategories] = useState([]);
    const[loading,setLoading] = useState(true);
    useEffect(() => {
        getAllCategories().then((res) => {
          setCategories(res);
          // console.log(res)
          setLoading(false);
        });
      },[]); 
      
  return (
    <>
   <h2>Categories</h2>

<div className="sectionCategorries">
    
<div className="container">

  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1"><h5>Id</h5></div>
      <div class="col col-2"><h5>Name</h5></div>
      <div class="col col-3"><h5>Description</h5></div>
      <div class="col col-3"><h5>Edit</h5></div>
      <div class="col col-3"><h5>Delete</h5></div>
    </li>
    {categories &&
            categories.map((category) => {
              return (
                <>
    <li key={category._id} class="table-row">
      <div class="col col-1" data-label="Job Id">{category._id}</div>
      <div class="col col-2" data-label="Customer Name">{category.name}</div>
      <div class="col col-3" data-label="Amount">{category.description}</div>
      <div class="col col-3" data-label="Amount"><button>Edit</button></div>
      <div class="col col-3" data-label="Amount"><button>Delete</button></div>
    </li>
    </>
    )})}
  </ul>
</div>
</div>
<Link to={"/admin/addcategory"}><button>Add Category</button></Link>
    </>
  )
}

export default Categories