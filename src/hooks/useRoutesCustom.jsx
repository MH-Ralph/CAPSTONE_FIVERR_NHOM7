import React from "react";
import { useRoutes } from "react-router-dom";
import { pathDefault } from "../common/pathDefault";
import HomeTemplate from "../templates/HomeTemplate";
import HomePage from "../pages/HomePage/HomePage";
import ListJobPage from "../pages/ListJobPage/ListJobPage";
import AdminTemplate from "../templates/AdminTemplate/AdminTemplate";
import ManagerUser from "../pages/ManagerUser/ManagerUser";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import ManagerJob from "../pages/ManagerJob/ManagerJob";
import CreateUser from "../pages/CreateUser/CreateUser";
import DetailJob from "../pages/DetailJob/DetailJob";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: <HomeTemplate />,
      children: [
        { index: true, element: <HomePage /> },
        { path: pathDefault.listJob, element: <ListJobPage /> },
        { path: pathDefault.detailJob, element: <DetailJob /> },
      ],
    },
    {
      path: pathDefault.admin,
      element: <AdminTemplate />,
      children: [
        { index: true, element: <ManagerUser /> },
        { path: pathDefault.managerJob, element: <ManagerJob /> },
        { path: pathDefault.createUser, element: <CreateUser /> },
      ],
    },
    { path: pathDefault.adminLogin, element: <AdminLogin /> },
  ]);
  return routes;
};

export default useRoutesCustom;
