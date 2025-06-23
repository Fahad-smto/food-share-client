import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayouts = () => {
    return (
        <div className="max-w-6xl mx-auto">

            <Navbar></Navbar>

            <div>
                 <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;