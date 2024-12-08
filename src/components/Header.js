import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = ()=>{
    const[btnName , setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();

    return (
    <div className="bg-slate-500 flex justify-between items-center shadow-xl">
        <div className="logo-container">
            <Link to="/"><img className=" m-2 w-24 rounded-lg" alt="logo" src={LOGO_URL}></img></Link>
        </div>
        <div className="navbar">
            <ul className="flex items-center">
                <li className=" mx-1 ">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                <li className=" mx-1 "><Link to="/">Home</Link></li> 
                <li className=" mx-1 "><Link to="/about"> About Us</Link> </li> 
                <li className=" mx-1 "><Link to="/contact"> Contact</Link></li> 
                <li className=" mx-1 ">Cart</li>
                <button className="login " onClick={()=>{
                    setBtnName(btnName === "login" ? "logout" : "login");
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
    );
};

export default Header;