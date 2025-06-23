import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Loading from "../components/Loading";
import MainLayouts from "../pages/MainLayouts";
import Error from "../components/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement:<Error></Error>,
    children:[
        {
            path:'/',
            Component:Home,
            hydrateFallbackElement:<Loading></Loading>
        }
    ]
  },
]);