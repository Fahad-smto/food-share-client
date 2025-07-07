import { Outlet } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import FeaturedFoods from "../components/FeaturedFoods";




const MainLayouts = () => {
    return (
        <div className="max-w-6xl mx-auto bg-[url('/bg3.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">

            <NavBar></NavBar>

            <div className="min-h-[calc(100vh-285px)]">
                <Outlet></Outlet>
            </div>
            <FeaturedFoods></FeaturedFoods>
            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;