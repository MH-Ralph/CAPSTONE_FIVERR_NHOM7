import React from "react";
import "./category-select.scss";

const CategorySelect = () => {
  const categoryArr = [
    {
      src: "../../../public/image/programming-tech.49dbf0d.svg",
      content: "Programming & Tech",
    },
    {
      src: "../../../public/image/graphics-design.3272c08.svg",
      content: "Graphics & Design",
    },
    {
      src: "../../../public/image/digital-marketing.85e8846.svg",
      content: "Digital Marketing",
    },
    {
      src: "../../../public/image/writing-translation.dc66eb8.svg",
      content: "Writing & Translation",
    },
    {
      src: "../../../public/image/video-animation.21fb1d6.svg",
      content: "Video & Animation",
    },
    {
      src: "../../../public/image/ai-services.40511da.svg",
      content: "AI Services",
    },
    {
      src: "../../../public/image/music-audio.6a411f2.svg",
      content: "Music & Audio",
    },
    {
      src: "../../../public/image/business.772c3c9.svg",
      content: "Business",
    },
    {
      src: "../../../public/image/consulting.93989a4.svg",
      content: "Consulting",
    },
  ];
  return (
    <div className="category_select">
      {categoryArr.map((item, index) => {
        return (
          <div className="category_box" key={index}>
            <a href="" className="category_box_content">
              <div className="image">
                <img src={item.src} alt="" />
              </div>
              <p className="box_content">{item.content}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySelect;
