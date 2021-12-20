import defaultLayout from "../layouts/defaultLayout";
import adminLayout from "../layouts/adminLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    exact: true,
    component: () => <Home title="home" />,
    layout: defaultLayout,
  },
  {
    path: "/login",

    component: () => <Login title="Login" />,
    layout: adminLayout,
  },
];
