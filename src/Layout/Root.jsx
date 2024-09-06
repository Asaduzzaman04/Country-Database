import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Root = () => {
    return (
        <div className="flex flex-col text-center items-center gap-5">
            <Navbar/>
            <Outlet/>
            <h2>footer</h2>
        </div>
    );
};

export default Root;