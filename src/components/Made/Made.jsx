import React from "react";
import "./made.scss";

const Made = () => {
  const madeArr = [
    {
      imageUrl: "../../../public/image/1-min.jpeg",
      featured: "Logo Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/1.jpg",
      featured: "Architecture & Interior Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/03.jpg",
      featured: "Logo Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/4.jpg",
      featured: "Architecture & Interior Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/artwork.jpeg",
      featured: "Illustration",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/Aurelle-02.png",
      featured: "Architecture & Interior Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/F.jpg",
      featured: "Logo Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/hammer-final-4.jpg",
      featured: "Architecture & Interior Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/Post-1.png",
      featured: "Architecture & Interior Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/R1-oak.jpg",
      featured: "Illustration",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/S-2.jpg",
      featured: "Logo Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/VIEW-01.jpeg",
      featured: "Architecture & Interior Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/VIEW-01.jpg",
      featured: "Illustration",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/View-03.jpg",
      featured: "Logo Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/View-5.jpg",
      featured: "Architecture & Interior Design",
      author: "marcel_dezinero",
    },
    {
      imageUrl: "../../../public/image/view-3.jpeg",
      featured: "Illustration",
      author: "marcel_dezinero",
    },
  ];
  return (
    <div className="made">
      <h2>Made on Fiverr</h2>
      <div className="made_list">
        {madeArr.map((item, index) => {
          return (
            <div key={index} className="made_item">
              <div className="made_item_image">
                <img src={item.imageUrl} alt="" />
              </div>
              <div className="made_item_overlay">
                <div className="made_overlay_bottom">
                  <div className="made_overlay_bottom_box">
                    <div className="made_overlay_message">
                      <p>
                        Featured in: <span>{item.featured}</span>
                      </p>
                      <span>
                        by: <span>{item.author}</span>
                      </span>
                    </div>
                    <button className="made_overlay_button">
                      <i className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="made_item_heart">
                <i className="fa-regular fa-heart" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Made;
