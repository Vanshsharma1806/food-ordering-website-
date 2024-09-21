import { LOGO_URL } from "../utils/constants";
import { CART_LOGO } from "../utils/constants";



const Header = ()=>{

    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" alt="logo" src={LOGO_URL}></img>
        </div>
        <div className="navbar">
            <ul>
                <li>Home</li> 
                <li>about us</li> 
                <li>contact</li> 
                <li><img className="cart" src={CART_LOGO}></img></li> 
            </ul>
        </div>
    </div>
    );
};

export default Header;