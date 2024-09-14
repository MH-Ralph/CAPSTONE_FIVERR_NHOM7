import React from "react";
import Slider from "react-slick";
import "./guide.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Guide = () => {
  // SLICK CAROUSEL SETTING
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // GUIDE INFORMATION
  const guideArr = [
    {
      imgUrl: "../../../public/image/business-fiverr.jpg",
      content: "Start a side business",
    },
    {
      imgUrl: "../../../public/image/businesslogodesign-fiverrguide.jpg",
      content: "Ecommerce business Ideas",
    },
    {
      imgUrl: "../../../public/image/05-ArticleCover.jpg",
      content: "Start an online business and work from home",
    },
    {
      imgUrl: "../../../public/image/sidehustle.jpeg",
      content: "Build a website from scratch",
    },
    {
      imgUrl:
        "../../../public/image/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg",
      content: "Grow your business with AI",
    },
    {
      imgUrl:
        "../../../public/image/1682363178357-Howtobuildawebsitefromscratch.jpg",
      content: "Create a logo for your business",
    },
  ];
  return (
    <div className="">
      <div className="guide">
        <div className="guide_top">
          <h2 className="guide_title">Guides to help you grow</h2>
          <a href="#">See more</a>
        </div>
        <div className="guide_list">
          <Slider {...settings}>
            {guideArr.map((item, index) => {
              return (
                <div key={index} className="guide_item">
                  <div className="guide_item_unit">
                    <a href="#" className="image">
                      <div className="guide_image">
                        <img src={item.imgUrl} alt="" />
                      </div>
                    </a>
                    <h3>{item.content}</h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="joinBanner">
        <h2>
          Freelance services at your <span>fingertips!</span>
        </h2>
        <button className="joinBanner_button">Join Fiverr</button>
      </div>
    </div>
  );
};

export default Guide;
