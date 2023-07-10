import React from 'react'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./_index.scss";
import { Link } from "react-router-dom";

const index = () => {
    const images = [
        "https://c0.wallpaperflare.com/preview/690/403/671/singapore-bar-cocktail-speakeasy.jpg",
        "https://www.goldbaratedition.com/en/resourcefiles/mainimages/6-cocktails.jpg?version=2132023052424",
        "https://www.hamburg.de/image/4623200/kingTeaser/990/420/126e2a2df8550d400a2f9dbff45d45c3/lr/cocktailbars-bild.jpg",
      ];
  return (
    <>
    <div>
      <Slide>
        <div className="eachslideeffect">
          <div
            style={{
              backgroundImage: `url(${images[0]})`,
              background: "cover",
              bottom: "0",
            }}
          >
            <span>
              <p>Exclusive drink services</p>
              <h1 class="animate__animated animate__bounce">Cocktail stage evenings</h1>
                <Link to="/about"><button class="button-89" >View more</button></Link>
            </span>
          </div>
        </div>
        <div className="eachslideeffect">
          <div
            style={{
              backgroundImage: `url(${images[1]})`,
              background: "cover",
              bottom: "0",
            }}
          >
            <span>
              <p>Exclusive drink services</p>
              <h1 class="animate__animated animate__bounce">Cocktail stage evenings</h1>

              <Link to={"/about"}><button class="button-89" >View more</button></Link>
            </span>
          </div>
        </div>
        <div className="eachslideeffect">
          <div
            style={{
              backgroundImage: `url(${images[2]})`,
              background: "cover",
              bottom: "0",
            }}
          >
            <span>
              <p>Exclusive drink services</p>
              <h1 class="animate__animated animate__bounce">Cocktail stage evenings</h1>

              <Link to="/about"><button class="button-89" >View more</button></Link>
            </span>
          </div>
        </div>
      </Slide>
    </div>
  </>
  )
}

export default index