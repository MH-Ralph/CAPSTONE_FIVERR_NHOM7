import React from "react";
import "./testimonial.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  // SLICK CAROUSEL SETTING
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
          initialSlide: 1,
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
  //   TESTIMONIAL INFORMATION
  const testimonialArr = [
    {
      videoUrl: "https://www.youtube.com/embed/hICsccX-6TY?si=icDusUhWAz-QG6w5",
      title: "Tim and Dan Joo, Co-Founders",
      logoUrl: "./image/haerfest-logo-x2.934ab63.png",
      message:
        "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.",
    },

    {
      videoUrl: "https://www.youtube.com/embed/3ifgQF40rMI",
      title: "Caitlin Tormey, Chief Commercial Officer",
      logoUrl: "./image/naadam-logo-x2.a79031d.png",
      message:
        "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/XUwfy7d08KI?si=1_dLetR_SUbbQQHv",
      title: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
      logoUrl: "./image/lavender-logo-x2.3fff9e7.png",
      message:
        "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/Q2qpOeY4CZA?si=040OuLvUJgVggJsC",
      title: "Kay Kim, Co-Founder",
      logoUrl: "./image/rooted-logo-x2.7da3bc9.png",
      message:
        "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
    },
  ];
  return (
    <div className="testimonial">
      <h2>What they're saying about Fiverr</h2>
      <div className="testimonial_list">
        <Slider {...settings}>
          {testimonialArr.map((item, index) => {
            return (
              <div key={index} className="testimonial_item">
                <div className="testimonial_item_unit">
                  <div className="testimonial_video">
                    <iframe
                      className="video"
                      src={item.videoUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="testimonial_content">
                    <h3 className="testimonial_title">
                      {item.title}
                      <span>
                        <img src={item.logoUrl} alt="" />
                      </span>
                    </h3>
                    <p className="testimonial_message">
                      <blockquote>
                        <i>"{item.message}"</i>
                      </blockquote>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
