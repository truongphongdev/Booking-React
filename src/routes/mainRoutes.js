import React from "react";
const MainLayout = React.lazy(() => import("../layout/MainLayout"));

export default [{ path: "/", element: <MainLayout /> }];
