import React from "react";
import Slider from "../../components/Main/SliderSection"
import Reservation from "../../components/Main/ReservationMain"
import Section3 from "../../components/Main/Section3"
import StaticImage from "../../components/Main/StaticImage"
import MenuSection from "../../components/Main/MenuSection"
import Section6 from "../../components/Main/Section6"
const Home = () => {

  return (
   <>
    <Slider/>
    <Reservation />
    <Section3/>
    <StaticImage/>
    <MenuSection/>
    <Section6/>
   </>
  );
};

export default Home;


