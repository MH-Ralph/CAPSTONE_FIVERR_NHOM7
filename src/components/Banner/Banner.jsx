import React, { useDeferredValue, useEffect, useState } from "react";
// import styles from "./Banner.module.scss";
import "./banner.scss";
import { useFormik } from "formik";
import { http } from "../../services/config";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Banner = () => {
  const [searchOption, setSearchOption] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // SET UP FORMIK
  const formik = useFormik({
    initialValues: {
      tenCongViec: "",
    },
    onSubmit: (values) => {
      console.log(values);
      http
        .get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${values.tenCongViec}`)
        .then((res) => {
          let productArr = res.data.content;

          productArr = productArr.slice(0, 4);
          console.log(productArr);

          const searchArr = productArr.map((item, index) => {
            return {
              key: index,
              label: (
                <div
                  className="flex gap-3 items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  <img
                    src={item.congViec.hinhAnh}
                    style={{ width: 80 }}
                    alt=""
                  />
                  {item.congViec.tenCongViec}
                </div>
              ),
            };
          });
          setSearchOption(searchArr);

          setIsOpen(true);
          console.log("searchOption", searchOption);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  // SET UP USE DEBOUNCE
  const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
      const timeOutId = setTimeout(() => {
        setDebounceValue(value);
      }, delay);
      return () => {
        clearTimeout(timeOutId);
      };
    }, [value]);
    return debounceValue;
  };

  useEffect(() => {
    formik.handleSubmit();

    if (!formik.values.tenCongViec) {
      setIsOpen(false);
    }
  }, [useDebounce(formik.values.tenCongViec, 1000)]);

  return (
    <div className={`banner w-full `}>
      <div className="banner_search max-w-2xl">
        <h1 className="banner_title">
          Find the right{" "}
          <span className={`text-green-500 banner_title_span`}>freelance</span>{" "}
          service, right away
        </h1>
        <div className="banner_search_bar">
          <form
            onSubmit={formik.handleSubmit}
            id="banner_search_form"
            className=" flex relative"
          >
            <input
              type="text"
              name="tenCongViec"
              className={`banner_search_bar_input search_bar_input`}
              placeholder="Search for any searvice..."
              onChange={formik.handleChange}
              value={formik.values.tenCongViec}
            />
            <Dropdown
              menu={{
                items: searchOption,
              }}
              open={isOpen}
            >
              <a onClick={(e) => e.preventDefault()}></a>
            </Dropdown>
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
