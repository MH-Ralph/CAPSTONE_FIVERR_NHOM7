import React, { useEffect, useState } from "react";
import IconSearch from "../Icons/IconSearch";
import { useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/pathDefault";
import { congViecService } from "../../services/congViec.service";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

const FormSearchProduct = () => {
  const [valueSearch, setValueSearch] = useState("");
  const navigate = useNavigate();
  const [checkDropdown, setCheckDropDown] = useState(false);
  const [listJob, setListJob] = useState([]);
  const debounceValue = useDebounce(valueSearch, 1000);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(valueSearch);
    navigate(`${pathDefault.listJob}?tenCongViec=${valueSearch}`);
    setCheckDropDown(false);
  };

  const handleChange = (event) => {
    setValueSearch(event.target.value);
  };

  useEffect(() => {
    // Gọi api lấy dữ liệu gợi ý người dùng
    congViecService
      .layCongViecTheoTen(debounceValue)
      .then((res) => {
        const newListJob = res.data.content.slice(0, 4).map((job, index) => {
          return {
            key: index,
            label: (
              <Link
                to={`/cong-viec-chi-tiet/${job.id}`}
                className="flex items-center space-x-4"
              >
                <img src={job.congViec.hinhAnh} className="h-14" alt="img" />
                <div>
                  <h4>{job.congViec.tenCongViec}</h4>
                  <p>{job.congViec.giaTien}</p>
                </div>
              </Link>
            ),
          };
        });

        setCheckDropDown(true);
        setListJob(newListJob);
      })
      .catch((err) => {
        console.log(err);
        setCheckDropDown(false);
      });
  }, [debounceValue]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Dropdown
          menu={{
            items: listJob,
          }}
          open={checkDropdown}
        >
          <div className="pl-4 rounded-md border border-gray-500 flex items-center justify-between min-w-[350px]">
            <input
              className="flex-1 focus:border-none focus:outline-none py-2"
              type="text"
              placeholder="What service are you looking for today?"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="p-2 bg-black rounded-r-md hover:opacity-80"
            >
              <IconSearch />
            </button>
          </div>
        </Dropdown>
      </form>
    </div>
  );
};

export default FormSearchProduct;
