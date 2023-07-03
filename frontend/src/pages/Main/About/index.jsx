import React, { useState, useRef, useEffect } from 'react';
import "./_index.scss"
import { getAllAbouts } from '../../../api/about';

const Index = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    getAllAbouts().then((res) => {
      setAbout(res);
    });
  }, []);
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
    {about &&
          about.map((data) => {
            return (
      <div key={data._id}  className="containerSec1">
        <div className="colSec1">
          <img src={data.imageURL} alt="" />
        </div>
        <div className='colSec1 pad'>
          <h5>{data.name}</h5>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <button className='buttonSec1'>View More</button>
        </div>
      </div>
                  );
                })}
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