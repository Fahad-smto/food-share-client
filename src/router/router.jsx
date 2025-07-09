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
import PrivateRoute from "../components/PrivateRoute";


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
          loader:()=>fetch('https://food-share-server-pi.vercel.app/foods'),
          element:<AvailableFood></AvailableFood>
        },
        {
          path:'/add_food',
          element:<PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        },
        {
          path:'/manage_my_food',
          element:<PrivateRoute>
            <ManageMyFood></ManageMyFood>
          </PrivateRoute>
        },
        {
          path:'/my_food_request',
          element:<PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
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
          element:<PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        }
    ]
  },
]);