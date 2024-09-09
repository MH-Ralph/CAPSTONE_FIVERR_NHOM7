import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";

const ListJobPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [listJob, setListJob] = useState([]);
  const [totalJob, setTotalJob] = useState(0);
  let tenCongViec = searchParam.get("tenCongViec");

  //   Lấy thông tin trên searchParam và gọi api
  useEffect(() => {
    congViecService
      .layCongViecTheoTen(tenCongViec)
      .then((res) => {
        setListJob(res.data.content);
        setTotalJob(res.data.content.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tenCongViec]);

  console.log(listJob);

  return (
    <div className="pt-24 pb-12 border-b border-gray-200">
      <div className="max-container px-8">
        <h1 className="text-2xl">
          Result for <b>{searchParam.get("tenCongViec")}</b>
        </h1>

        <p className="mt-4 text-gray-500">{totalJob} Results</p>

        {/* list */}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-4">
          {listJob.map((job, index) => {
            console.log(job);
            return (
              <div
                key={index}
                className="rounded-md overflow-hidden border shadow-sm"
              >
                <img className="w-full" src={job.congViec.hinhAnh} alt="img" />
                <div className="px-3 pb-4 flex flex-col justify-center gap-2">
                  {/* Tên tác giả và cấp độ */}
                  <div className="flex items-start gap-2 py-2">
                    <img
                      className="w-10 rounded-full"
                      src={job.avatar}
                      alt=""
                    />
                    <div>
                      <h4>{job.tenNguoiTao}</h4>
                      <p>Level 2</p>
                    </div>
                  </div>
                  {/* Tên công việc */}
                  <h3>{job.congViec.tenCongViec}</h3>
                  {/* Đánh giá */}
                  <div className="space-x-2">
                    <i className="fa-solid fa-star text-orange-500"></i>
                    <span className="text-orange-500">
                      {job.congViec.saoCongViec}
                    </span>
                    <span className="text-gray-500">
                      ({job.congViec.danhGia})
                    </span>
                  </div>
                  {/* Yêu thích và giá tiền */}
                  <div className="flex items-center justify-between">
                    <i className="fa-solid fa-heart"></i>
                    <div>
                      <span>Starting at</span>{" "}
                      <span>${job.congViec.giaTien}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListJobPage;
