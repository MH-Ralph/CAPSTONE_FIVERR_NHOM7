import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { http } from "../../services/config";

const ManagerJob = () => {
  const [congViecArr, setCongViecArr] = useState([]);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text) => <img src={text} alt="" />,
    },
    {
      title: "Tên Công Việc",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
    },
    {
      title: "Giá Tiền",
      dataIndex: "giaTien",
      key: "giaTien",
    },
    {
      title: "Mô Tả Ngắn",
      dataIndex: "moTaNgan",
      key: "moTaNgan",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button className="py-1 px-3 bg-orange-400 text-white rounded-md hover:bg-orange-500">
            Sửa
          </button>
          <button className="py-1 px-3 bg-red-400 text-white rounded-md hover:bg-red-500">
            Xoá
          </button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const congViecArrId = http
      .get("cong-viec")
      .then((res) => {
        setCongViecArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("congViecArr", congViecArr);
  const dataArr = congViecArr.map((item, index) => {
    return {
      id: `${item.id}`,
      hinhAnh: `${item.hinhAnh}`,
      tenCongViec: `${item.tenCongViec}`,
      giaTien: `${item.giaTien} USD`,
      moTaNgan: `${item.moTaNgan}`,
    };
    // console.log(item.id);
  });
  console.log(dataArr);

  return (
    <div>
      <Table columns={columns} dataSource={dataArr} />
    </div>
  );
};

export default ManagerJob;
