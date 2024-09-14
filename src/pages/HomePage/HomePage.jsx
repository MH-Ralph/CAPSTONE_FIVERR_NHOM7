import React from "react";
import Banner from "../../components/Banner/Banner";
import CategorySelect from "../../components/CategorySelect/CategorySelect";
import PopularService from "../../components/PopularService/PopularService";
import BrandMessage from "../../components/BrandMessage/BrandMessage";
import FiverrPro from "../../components/FiverrPro/FiverrPro";
import Testimonial from "../../components/Testimonial/Testimonial";
import LogoMaker from "../../components/LogoMaker/LogoMaker";
import Guide from "../../components/Guide/Guide";
import Made from "../../components/Made/Made";
import Login from "../../components/Login/Login";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="text-right">
        <Login />
      </div>

      <Banner />
      <CategorySelect />
      <PopularService />
      <BrandMessage />
      <FiverrPro />
      <Testimonial />
      <LogoMaker />
      <Made />
      <Guide />
    </div>
  );
};

export default HomePage;
