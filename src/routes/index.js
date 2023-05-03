import React                from "react";


const routes = {
  root: {
    path: () => "/",
    pathRegexp: "/",
    name: "Home",
    component: () => <div>Home</div>,
    exact: true
  }
};
export default routes;
