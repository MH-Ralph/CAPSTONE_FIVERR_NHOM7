import React, { useContext, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getValueUserApi } from "../../redux/personSlice";
import { personService } from "../../services/person.service";
import { NotificationContext } from "../../App";

const ManagerUser = () => {
  const dispatch = useDispatch();
  const { listUsers } = useSelector((state) => state.person);
  const { handleNotifycation } = useContext(NotificationContext);

  useEffect(() => {
    dispatch(getValueUserApi());
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (text) => {
        return <img className="h-14" src={text} />;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (text) => {
        return <Tag color={text ? "blue" : "cyan"}>{text ? "Nam" : "Nữ"}</Tag>;
      },
    },
    {
      title: "ROLE",
      dataIndex: "role",
      key: "role",
      render: (text) => (
        <Tag color={text == "ADMIN" ? "geekblue-inverse" : "lime-inverse"}>
          {text}
        </Tag>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="space-x-3">
          <button
            onClick={() => {
              personService
                .deleteUser(record.id)
                .then((res) => {
                  console.log(res);
                  handleNotifycation(res.data.message, "success");
                  dispatch(getValueUserApi());
                })
                .catch((err) => {
                  console.log(err);
                  handleNotifycation(err.message, "error");
                  dispatch(getValueUserApi());
                });
            }}
            className="bg-red-500 py-2 px-5 rounded-md hover:bg-red-500/90 duration-300"
          >
            Xóa
          </button>
          <button className="bg-yellow-500 py-2 px-5 rounded-md hover:bg-yellow-500/90 duration-300">
            Sửa
          </button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={listUsers} />;
};
export default ManagerUser;
