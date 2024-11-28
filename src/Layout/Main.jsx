import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/Navbar";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')

    return (
        <div>
            <div>
                {noHeaderFooter || <NavBar />}
                <Outlet />
                {noHeaderFooter || <Footer />}
            </div>
        </div>
    );
};

export default Main;
