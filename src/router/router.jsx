import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Loading from "../components/Loading";
import MainLayouts from "../pages/MainLayouts";
import Error from "../components/Error";
import AvailableFood from "../pages/AvailableFood";
import AddFood from "../pages/AddFood";
import ManageMyFood from "../pages/ManageMyFood";
import MyFoodRequest from "../pages/MyFoodRequest";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FoodDetails from "../components/FoodDetails";


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
        },
        {
          path:'/available_food',
          loader:()=>fetch('http://localhost:5000/foods'),
          element:<AvailableFood></AvailableFood>
        },
        {
          path:'/add_food',
          element:<AddFood></AddFood>
        },
        {
          path:'/manage_my_food',
          element:<ManageMyFood></ManageMyFood>
        },
        {
          path:'/my_food_request',
          element:<MyFoodRequest></MyFoodRequest>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/foods/:id',
          element:<FoodDetails></FoodDetails>
        }
    ]
  },
]);