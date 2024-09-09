import React from "react";
import { useRoutes } from "react-router-dom";
import { pathDefault } from "../common/pathDefault";
import HomeTemplate from "../templates/HomeTemplate";
import HomePage from "../pages/HomePage/HomePage";
import ListJobPage from "../pages/ListJobPage/ListJobPage";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: <HomeTemplate />,
      children: [
        { index: true, element: <HomePage /> },
        { path: pathDefault.listJob, element: <ListJobPage /> },
      ],
    },
  ]);
  return routes;
};

export default useRoutesCustom;
