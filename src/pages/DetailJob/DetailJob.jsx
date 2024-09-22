import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";

const DetailJob = () => {
  const [job, setJob] = useState({});
  const [searchParam, setSearchParam] = useSearchParams();
  let id = searchParam.get("id");

  useEffect(() => {
    congViecService
      .layChiTietCongViec(id)
      .then((res) => {
        setJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(job);

  return (
    <div className="detailJob">
      <div className="container pt-[100px] pb-20">
        <h1 className="font-bold text-3xl text-center">{job.tenChiTiet}</h1>
      </div>
    </div>
  );
};

export default DetailJob;
