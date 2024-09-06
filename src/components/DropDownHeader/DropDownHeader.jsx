import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const DropDownHeader = ({ name, content }) => {
  const items = content.title.map((item, index) => {
    return {
      label: (
        <a
          href="#"
          className={`flex  rounded-md max-w-[400px] space-x-3 ${
            index <= 0 ? "py-3" : ""
          }`}
        >
          {content.icon && (
            <div className="flex items-center justify-center">
              {content.icon}
            </div>
          )}
          <div className="whitespace-normal">
            <h4 className="text-text-darker font-medium text-[16px]">{item}</h4>
            <p className="font-medium text-text-gray">
              {content.paragh[index]}
            </p>
          </div>
        </a>
      ),
      key: index,
    };
  });

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
      className="hidden md:block cursor-pointer px-2  hover:bg-gray-100  duration-300 rounded-md whitespace-nowrap"
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="py-2 font-bold text-text-dark ">
          {name}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropDownHeader;
