import {  useContext } from "react";
 import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading'
import { useLocation } from "react-router";
import { Navigate } from "react-router";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(user);

    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }


    return  <Navigate to="/login" state={{ from: location }} replace />;;
};

export default PrivateRoute;


// import { useContext } from "react";
// import { AuthContext } from '../provider/AuthProvider';
// import Loading from '../components/Loading';
// import { useLocation, Navigate } from "react-router";

// const PrivateRoute = ({ children }) => {
//     const { user, loading } = useContext(AuthContext);  // ✅ useContext
//     const location = useLocation();

//     if (loading) {
//         return <Loading />;
//     }

//     if (user && user?.email) {
//         return children;
//     }

//     return <Navigate to="/login" state={{ from: location }} replace />;
// };

// export default PrivateRoute;
