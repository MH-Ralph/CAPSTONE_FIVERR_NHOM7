import React from "react";
import "./popular-service.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularService = () => {
  // SLICK CAROUSEL SETTING
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
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

  // SERVICE LIST INFORMATION
  const serviceListArr = [
    {
      color: "#00732e",
      content: "Website Development",
      src: "./image/website-development.png",
    },
    {
      color: "#ff7640",
      content: "Logo Design",
      src: "./image/logo-design.png",
    },
    {
      color: "#003912",
      content: "SEO",
      src: "./image/seo.png",
    },
    {
      color: "#4d1727",
      content: "Architecture & Interior Design",
      src: "./image/architecture-design.png",
    },
    {
      color: "#687200",
      content: "Social Media Marketing",
      src: "./image/social-media-marketing.png",
    },
    {
      color: "#421300",
      content: "Voice Over",
      src: "./image/voice-over.png",
    },
    {
      color: "#254200",
      content: "Software Development",
      src: "./image/software-development.png",
    },
    {
      color: "#8f2900",
      content: "Data Science & ML",
      src: "./image/data-science.png",
    },
    {
      color: "#687200",
      content: "Product Photography",
      src: "./image/product-photography.png",
    },
    {
      color: "#00732e",
      content: "E-Commerce Marketing",
      src: "./image/e-commerce.png",
    },
    {
      color: "#be5272",
      content: "Video Editing",
      src: "./image/video-editing.png",
    },
  ];
  return (
    <div className="popular_service">
      <h2>Popular services</h2>
      <div className="service_list slider-container">
        <Slider {...settings}>
          {serviceListArr.map((item, index) => {
            return (
              <div key={index} className="service_item">
                <div
                  className="service_box"
                  style={{ backgroundColor: item.color }}
                >
                  <a href="" className="service_box_content">
                    <p className="service_box_title">{item.content}</p>
                    <div className="service_box_image">
                      <img src={item.src} alt="" className="img" />
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PopularService;
