import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/Navbar";

const Main = () => {
    return (
        <div>
            <div className="">
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;
