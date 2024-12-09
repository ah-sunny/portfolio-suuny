import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


const MainLayout = () => {
    return (
        <div className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
            <div>
                <Navbar ></Navbar>
            </div>
            <div className="container mx-auto  ">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;