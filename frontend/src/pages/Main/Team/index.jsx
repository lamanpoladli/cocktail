import React, { useState, useEffect } from "react";
import "./_index.scss";
import { getAllTeam } from "../../../api/requests";
const Index = () => {
    const [team, setTeam] = useState([]);
  useEffect(() => {
    getAllTeam().then((res) => {
        setTeam(res);
    });
  }, []);
  return (
    <>
    <div className='team'>
      <h1>Our Team</h1>
    </div>
    <section id="team" className="pb-5">
    <div className="container">
        <h5 className="section-title h1">OUR TEAM</h5>
        <div class="row">
            <div>
                <div className="image-flip rowTeam" >
                {team &&
                                 team.map((data) => {
                                return (
                    <div className="mainflip flip-0 col4Team">
                        <div className="frontside">
                            <div className="card">
                            
                                <div key={data._id}  className="card-body text-center">
                                    <p><img className=" img-fluid" src={data.imageURL} alt="card image"/></p>
                                    <h4 className="card-title">{data.name}</h4>
                                    <p className="card-text">{data.title}</p>
                                    <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">{data.name}</h4>
                                    <p className="card-text">{data.description}</p>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                      );
                    })}
                      </div>
            </div>
            
        </div>
    </div>
</section>
    </>
  )
}

export default Index