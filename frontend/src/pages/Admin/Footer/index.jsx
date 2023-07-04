import React, { useEffect, useState } from 'react'
import { getAllFooter } from '../../../api/requests';
import { Link } from "react-router-dom";


const Categories = () => {
    const[footers,setFooters] = useState([]);
    const[loading,setLoading] = useState(true);
    useEffect(() => {
        getAllFooter().then((res) => {
            setFooters(res);
          // console.log(res)
          setLoading(false);
        });
      },[]); 
    
  return (
    <>
    <Link to={"/admin/addfooter"}><button className="editbtn marginbtn">Add Footer Image</button></Link>
   <h2>Categories</h2>
   

<div className="sectionCategorries">
    
<div className="container">

  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-2"><h5>Id</h5></div>
      <div class="col col-10"><h5>imageURL</h5></div>
    </li>
    {footers &&
            footers
            .map((footer) => {
              return (
                <>
    <li key={footer._id} class="table-row">
      <div class="col col-2" data-label="Job Id">{footer._id}</div>
      <div class="col col-10" data-label="Customer Name">{footer.imageURL}</div>
      {/* <div class="col col-3" data-label="Amount"><Link className="editLink" to={`/admin/categories/${category._id}`}><button className="editbtn">Edit</button></Link></div> */}
      
    </li>
    </>
    )})}
  </ul>
</div>
</div>
    </>
  )
}

export default Categories