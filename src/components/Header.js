import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";


const Header = ()=>{
    const {isLoggedIn, logout} = useAuth();
    const[btnName , setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    const location = useLocation();
    const navigate = useNavigate();
    const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
    const {cartItems} = useCart();
    const totalItems = Object.values(cartItems).reduce((acc, curr) => acc + curr.quantity, 0);


    return (
    <div className="bg-gray-100 flex justify-between items-center shadow-xl">
        <div className="logo-container">
            <Link to="/"><img className=" m-2 w-24 rounded-lg shadow-lg" alt="logo" src={LOGO_URL}></img></Link>
        </div>
        {
            !isAuthPage && (
                <div className="navbar">
                    <ul className="flex items-center gap-2">
                        <li className=" mx-1 font-semibold ">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                        <li className=" mx-1 font-semibold "><Link to="/">Home</Link></li> 
                        <li className=" mx-1 font-semibold "><Link to="/about"> About Us</Link> </li> 
                        <li className=" mx-1 font-semibold "><Link to="/contact"> Contact</Link></li> 
                    
                        <div className="relative flex cursor-pointer" onClick={() => navigate("/cart")}>
                            <button className=" mx-1 font-semibold cursor-pointer " >Cart</button>
                            {totalItems > 0 && (
                              <span className=" -top-2 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                {totalItems}
                              </span>
                            )}
                        </div>
                        
                        {
                            !isLoggedIn && (
                                <button>
                                    <Link to="/login"> Login</Link>
                                </button>
                            )
                        }
                        {
                            isLoggedIn && (
                                <button onClick={logout}>
                                    logout
                                </button>
                            )
                        }
                    </ul> 
                    
                </div>
            )
        }
    </div>
    );
};

export default Header;