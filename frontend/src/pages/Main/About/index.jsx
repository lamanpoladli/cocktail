import React, { useState, useRef } from 'react';
import "./_index.scss"

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
  return (
    <>
    <div className='about'>
      <h1>About</h1>
    </div>
    <section className="section1">
      <div className="containerSec1">
        <div className="colSec1">
          <img src="https://bridge269.qodeinteractive.com/wp-content/uploads/2019/10/about-img-1.jpg" alt="" />
        </div>
        <div className='colSec1 pad'>
          <h5>Behind the scene</h5>
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ni eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim an veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea nie commodo consequat. Duis aute irure in nulla pariatur Excepteur sint occaecat cupidatat non proiden sunt in culpa qui officia</p>
          <button className='buttonSec1'>View More</button>
        </div>
      </div>
    </section>
    <section className='section2'>
    <div>
            <video
                ref={videoRef}
                width="100%"
                height="100%"
                poster="https://bridge269.qodeinteractive.com/wp-content/uploads/2019/10/video-img.jpg"
                controls
            >
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            
        </div>
    </section>
    </>
  )
}

export default Index