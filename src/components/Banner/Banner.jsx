import React from "react";
// import styles from "./Banner.module.scss";
import "./banner.scss";

const Banner = () => {
  return (
    <div className={`banner w-full `}>
      <div className="banner_search max-w-2xl">
        <h1 className="banner_title">
          Find the right{" "}
          <span className={`text-green-500 banner_title_span`}>freelance</span>{" "}
          service, right away
        </h1>
        <div className="banner_search_bar">
          <form id="banner_search_form" className=" flex relative">
            <input
              type="text"
              className={`banner_search_bar_input search_bar_input`}
              placeholder="Search for any searvice..."
            />
            <button type="submit" className={`search_btn w-10 search_btn`}>
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
      </div>
      <div className="banner_brand flex ">
        <span>Trusted by:</span>
        <ul className="flex ">
          <li>
            <img src="../../../public/image/meta.ff37dd3.svg" alt="" />
          </li>
          <li>
            <img src="../../../public/image/pg.22fca85.svg" alt="" />
          </li>
          <li>
            <img src="../../../public/image/google.e74f4d9.svg" alt="" />
          </li>
          <li>
            <img src="../../../public/image/netflix.b310314.svg" alt="" />
          </li>
          <li>
            <img src="../../../public/image/paypal.d398de5.svg" alt="" />
          </li>
          <li>
            <img src="../../../public/image/payoneer.7c1170d.svg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
