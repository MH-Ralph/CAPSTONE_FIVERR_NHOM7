import React from "react";
import "./footer.scss";

const Footer = () => {
  const footerArr = [
    {
      titleUl: "Categories",
      contentLi1: "Graphics & Design",
      contentLi2: "Digital Marketing",
      contentLi3: "Writing & Translation",
      contentLi4: "Video & Animation",
      contentLi5: "Music & Audio",
      contentLi6: "Fiverr Logo Maker",
      contentLi7: "Programming & Tech",
      contentLi8: "Data",
      contentLi9: "Business",
      contentLi10: "Personal Growth & Hobbies",
      contentLi11: "Photography",
      contentLi12: "Finance",
      contentLi13: "End-to-End Projects",
      contentLi14: "Sitemap",
    },
    {
      titleUl: "About",
      contentLi1: "Careers",
      contentLi2: "Press & News",
      contentLi3: "Partnerships",
      contentLi4: "Privacy Policy",
      contentLi5: "Terms of Service",
      contentLi6: "Intellectual Property Claims",
      contentLi7: "Investor Relations",
      contentLi8: "",
      contentLi9: "",
      contentLi10: "",
      contentLi11: "",
      contentLi12: "",
      contentLi13: "",
      contentLi14: "",
    },
    {
      titleUl: "Support and Education",
      contentLi1: "Help & Support",
      contentLi2: "Trust & Safety",
      contentLi3: "Quality Guide",
      contentLi4: "Selling on Fiverr",
      contentLi5: "Buying on Fiverr",
      contentLi6: "Fiverr Guides",
      contentLi7: "Learn Online Courses",
      contentLi8: "",
      contentLi9: "",
      contentLi10: "",
      contentLi11: "",
      contentLi12: "",
      contentLi13: "",
      contentLi14: "",
    },
    {
      titleUl: "Community",
      contentLi1: "Customer Success Stories",
      contentLi2: "Community Hub",
      contentLi3: "Forum",
      contentLi4: "Events",
      contentLi5: "Blog",
      contentLi6: "Creators",
      contentLi7: "Affiliates",
      contentLi8: "Podcast",
      contentLi9: "Invite a Friend",
      contentLi10: "Become a Seller",
      contentLi11: "Community Standards",
      contentLi12: "",
      contentLi13: "",
      contentLi14: "",
    },
    {
      titleUl: "Business Solutions",
      contentLi1: "About Business Solutions",
      contentLi2: "Fiverr Pro",
      contentLi3: "Fiverr Certified",
      contentLi4: "Become an Agency",
      contentLi5: "Fiverr Enterprise",
      contentLi6: "Content Marketing",
      contentLi7: "Working Not Working",
      contentLi8: "Contact Sales",
      contentLi9: "",
      contentLi10: "",
      contentLi11: "",
      contentLi12: "",
      contentLi13: "",
      contentLi14: "",
    },
  ];
  return (
    <footer>
      <div className="container mx-auto">
        <div className="footer_top ">
          {footerArr.map((item, index) => {
            return (
              <div key={index} className="footer_top_column">
                <h3>{item.titleUl}</h3>
                <div className="footer_top_list">
                  <ul>
                    <li>
                      <span>{item.contentLi1}</span>
                    </li>
                    <li>
                      <span>{item.contentLi2}</span>
                    </li>
                    <li>
                      <span>{item.contentLi3}</span>
                    </li>
                    <li>
                      <span>{item.contentLi4}</span>
                    </li>
                    <li>
                      <span>{item.contentLi5}</span>
                    </li>
                    <li>
                      <span>{item.contentLi6}</span>
                    </li>
                    <li>
                      <span>{item.contentLi7}</span>
                    </li>
                    <li>
                      <span>{item.contentLi8}</span>
                    </li>
                    <li>
                      <span>{item.contentLi9}</span>
                    </li>
                    <li>
                      <span>{item.contentLi10}</span>
                    </li>
                    <li>
                      <span>{item.contentLi11}</span>
                    </li>
                    <li>
                      <span>{item.contentLi12}</span>
                    </li>
                    <li>
                      <span>{item.contentLi13}</span>
                    </li>
                    <li>
                      <span>{item.contentLi14}</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_left">
            <span className="footer_bottom_logo">
              <svg
                width="91"
                height="27"
                viewBox="0 0 91 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#7A7D85">
                  <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#7A7D85">
                  <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
                </g>
              </svg>
            </span>
            <span> &copy; Fiverr International Ltd. 2024</span>
          </div>
          <div className="footer_bottom_right">
            <div className="footer_bottom_social">
              <i className="fa-brands fa-tiktok" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-linkedin" />
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-pinterest" />
              <i className="fa-brands fa-x-twitter" />
            </div>
            <div className="footer_bottom_setting">
              <div className="language">
                <i className="fa-solid fa-globe" />
                <span>English</span>
              </div>
              <div className="exchange">
                <i className="fa-solid fa-dollar-sign" />
                <span>USD</span>
              </div>
              <div className="profile">
                <i className="fa-solid fa-baby" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
