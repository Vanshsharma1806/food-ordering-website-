import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = ()=>{
    const[btnName , setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    const location = useLocation();
    const isAuthPage = location.pathname === "/login" || location.pathname === "/signup"

    return (
    <div className="bg-slate-400 flex justify-between items-center shadow-xl">
        <div className="logo-container">
            <Link to="/"><img className=" m-2 w-24 rounded-lg shadow-lg" alt="logo" src={LOGO_URL}></img></Link>
        </div>
        {
            !isAuthPage && (
                <div className="navbar">
                    <ul className="flex items-center ">
                        <li className=" mx-1 ">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                        <li className=" mx-1 "><Link to="/">Home</Link></li> 
                        <li className=" mx-1 "><Link to="/about"> About Us</Link> </li> 
                        <li className=" mx-1 "><Link to="/contact"> Contact</Link></li> 
                        <li className=" mx-1 ">Cart</li>
                        <button className=" ">
                            <Link to="/login"> Login</Link>
                        </button>
                    </ul>
                </div>
            )
        }
    </div>
    );
};

export default Header;