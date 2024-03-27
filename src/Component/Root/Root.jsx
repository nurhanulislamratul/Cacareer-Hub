import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100">
            <div className="max-w-[1320px] mx-auto">
            <Header></Header>
            </div>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;