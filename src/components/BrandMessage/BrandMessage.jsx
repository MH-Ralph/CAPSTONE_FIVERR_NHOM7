import React from "react";
import "./brand-message.scss";

const BrandMessage = () => {
  const brandMessageArr = [
    {
      src: "../../../public/image/categories.72379ee.svg",
      title: "Over 700 categories",
      content:
        "Get results from skilled freelancers from all over the world, for every task, at any price point.",
    },
    {
      src: "../../../public/image/handshake.287b5d3.svg",
      title: "Clear, transparent pricing",
      content:
        "Pay per project or by the hour (Pro). Payments only get released when you approve.",
    },
    {
      src: "../../../public/image/lightning.2cded3f.svg",
      title: "Quality work done faster",
      content:
        "Filter to find the right freelancers quickly and get great work delivered in no time, every time.",
    },
    {
      src: "../../../public/image/support.660ad7f.svg",
      title: "24/7 award-winning support",
      content:
        "Chat with our team to get your questions answered or resolve any issues with your orders.",
    },
  ];
  return (
    <div className="brand_message">
      <h2 className="message_title">
        A whole world of freelance talent at your fingertips
      </h2>
      <div className="message_list">
        {brandMessageArr.map((item, index) => {
          return (
            <div key={index} className="message_item">
              <div className="item_top">
                <div className="item_top_icon">
                  <img src={item.src} alt="" />
                </div>
                <h3 className="item_top_message">{item.title}</h3>
              </div>
              <p className="message_bottom">{item.content}</p>
            </div>
          );
        })}
      </div>
      <div className="brand_video">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/0z-7CekM5A4?si=Gdw6RRRBihQ7Dj4J"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default BrandMessage;
