import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./_index.scss";
import { getAll } from "../../../api/requests";
const Index = () => {
  const[imagees,setImageess]=useState([]);
  useEffect(()=>{
    getAll().then((res)=>{
      setImageess(res);
    })
  },[])
  return (
    <>
      <section className="sectionWord">
        <div className="container">
          <Row>
            <div className="colWord">
            <h6><i>Visit a bar</i></h6>
            <h1>Open hours</h1>
            <p>Monday - Friday:<br></br>4:00 pm - 1:00 am</p>
            <p>Saturday:<br></br>4:00 pm - 3:00 am</p>
            <p>Sunday:<br></br>4:00 pm - 2:00 am</p>
            <p><i>Visit us</i></p>
            </div>
            {imagees && imagees.map((image)=>{
              return(<div key={image._id} className="colImage"><img  src={image.profileImg} alt="" /></div>)
            })}
            <div className="colWord">
            <h6><i>The best offer</i></h6>
            <h1>Happy hour</h1>
            <p>Monday - Sunday:<br></br>4:00 pm - 7:00 am</p>
            <p>20% off all wine by the glass<br></br>15% off all cocktails</p>
            <p>25% off all wine by the glass<br></br>10% off all cocktails</p>
            <p><i>View more</i></p>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Index;
