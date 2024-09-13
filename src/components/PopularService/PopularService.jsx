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
    slidesToShow: 5.5,
    slidesToScroll: 4,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
      src: "../../../public/image/website-development.png",
    },
    {
      color: "#ff7640",
      content: "Logo Design",
      src: "../../../public/image/logo-design.png",
    },
    {
      color: "#003912",
      content: "SEO",
      src: "../../../public/image/seo.png",
    },
    {
      color: "#4d1727",
      content: "Architecture & Interior Design",
      src: "../../../public/image/architecture-design.png",
    },
    {
      color: "#687200",
      content: "Social Media Marketing",
      src: "../../../public/image/social-media-marketing.png",
    },
    {
      color: "#421300",
      content: "Voice Over",
      src: "../../../public/image/voice-over.png",
    },
    {
      color: "#254200",
      content: "Software Development",
      src: "../../../public/image/software-development.png",
    },
    {
      color: "#8f2900",
      content: "Data Science & ML",
      src: "../../../public/image/data-science.png",
    },
    {
      color: "#687200",
      content: "Product Photography",
      src: "../../../public/image/product-photography.png",
    },
    {
      color: "#00732e",
      content: "E-Commerce Marketing",
      src: "../../../public/image/e-commerce.png",
    },
    {
      color: "#be5272",
      content: "Video Editing",
      src: "../../../public/image/video-editing.png",
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
