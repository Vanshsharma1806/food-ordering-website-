import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import MenuItems from "./MenuItems";

const ResMenu = ()=>{
    const [resInfo , setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const menu = await fetch(MENU_API+resId);
        const data = await menu.json();
        setResInfo(data);
    }

    if(resInfo == null) return <Shimmer/>

    const { name ,city, cuisines,costForTwoMessage , avgRating , locality} = resInfo?.data?.cards[2]?.card?.card?.info;
    const{slaString} = resInfo?.data?.cards[2]?.card?.card?.info?.sla;
    const itemCards =  resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards || resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[0].itemCards;
    console.log(itemCards)
    return <div className="res-menu">
        <div className="name-info">
            <h2 className="name">{name}</h2>
            <div className="menu-info">
                <div className="ratings">
                    <h3>{avgRating} stars</h3>
                    <h3>{costForTwoMessage}</h3>
                </div>
                <h4 className="cuisines"> {cuisines.join(", ")}</h4>
                <div className="locality">
                    <p>outlet</p>
                    <p>{locality}</p>
                </div>
                <h4> { slaString} </h4>
            </div>
        </div>
        
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) =>(
                
                <MenuItems item = {item} />
            ))}
        </ul>
    </div>
}
export default ResMenu;