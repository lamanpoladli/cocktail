import React, { useState, useEffect } from "react";
import "./_index.scss";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import { Link } from "react-router-dom";
import { getAllFooter } from "../../../api/requests";
const Index = () => {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    getAllFooter().then((res) => {
      setFooter(res);
    });
  }, []);
  return (
    <footer>
      <div className="containerFooter">
        <div className="colFooter">
          <h3>Bridge</h3>
          <p>
            Lorem ipsum dolor sit amet, consect<br></br> etur dip isicing elit,
            sed do eiusm
          </p>
          <div className="footerIcons">
            <div>
              <WatchLaterIcon />
            </div>
            <div>Mon-Sun: 09am - 09pm</div>
          </div>
          <div className="footerIcons">
            <div>
              <LocationOnIcon />
            </div>
            <div>1611 Linden Avenue, London</div>
          </div>
          <div className="footerIcons">
            <div>
              <CalendarViewMonthIcon />
            </div>
            <div>301-382-4311, 301-461-9671</div>
          </div>
        </div>
        <div className="colFooter">
          <h3>Pages</h3>
          <p>
            <Link className="link" to={"/"}>
              Home
            </Link>
          </p>
          <p>
            <Link className="link" to={"/reserv"}>
              Reservation
            </Link>
          </p>
          <p>
            <Link className="link" to={"/menu"}>
              Menu
            </Link>
          </p>
          <p>
            <Link className="link" to={"/contact"}>
              Contact
            </Link>
          </p>
        </div>
        <div className="colFooter">
          <h3>Opening hours</h3>
          <p>
            Monday – Friday:<br></br>10:00am – 01:00am
          </p>
          <p>
            Saturday – Sunday:<br></br>10:00am – 03:00 am
          </p>
        </div>
        <div className="colFooter">
          <h3>Instagram</h3>
          <div className="footerImage">
            {footer &&
              footer.map((data) => {
                return (
                  <div key={data._id} className="imageCol">
                    <div>
                      <img
                        src={data.imageURL} alt=""/>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
