import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { CART_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = ()=>{
    const[btnName , setBtnName] = useState("login");

    return (
    <div className="header">
        <div className="logo-container">
            <Link to="/"><img className="logo" alt="logo" src={LOGO_URL}></img></Link>
        </div>
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/about"> About Us</Link> </li> 
                <li><Link to="/contact"> Contact</Link></li> 
                <li><img className="cart" src={CART_LOGO}></img></li> 
                <button className="login" onClick={()=>{
                    setBtnName(btnName === "login" ? "logout" : "login");
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
    );
};

export default Header;