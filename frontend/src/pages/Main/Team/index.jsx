import React, { useState, useEffect } from "react";
import "./_index.scss";
import { getAllTeam } from "../../../api/team";
const Index = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    getAllTeam().then((res) => {
      setTeam(res);
    });
  }, []);
  return (
    <>
      <div className="team">
        <h1>Our Team</h1>
      </div>
      <section className="TeamSec">
      <div className="containerTeam">
        {team &&
          team.map((data) => {
            return (
              <div key={data._id}  class="book">
                <p >{data.description}</p>
                <div class="cover">
                <img className=" imgTeam" src={data.imageURL} alt="card image"/>
                </div>
              </div>
            );
          })}
      </div>
      </section>
    </>
  );
};

export default Index;
