import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuItems from "./MenuItems";
import useResMenu from "../utils/useResMenu";

const ResMenu = ()=>{

    const {resId} = useParams();
    const resInfo = useResMenu(resId);

    if(resInfo == null) return <Shimmer/>

    const { name ,city, cuisines,costForTwoMessage , avgRating , locality} = resInfo?.data?.cards[2]?.card?.card?.info;
    const{slaString} = resInfo?.data?.cards[2]?.card?.card?.info?.sla;
    const itemCards =  resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards || resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[0].itemCards;
    console.log(itemCards)
    return <div className="res-menu mx-60 my-5 ]">
        <div className="name-info bg-[#f0f0f0] rounded-3xl w-[850px] py-5 ">
            <h2 className="name p-1 m-6 text-3xl font-bold">{name}</h2>
            <div className="menu-info mx-5 pl-3 w-[800px] bg-white rounded-xl py-1"> 
                <div className="ratings ml-1 flex gap-[80px]">
                    <h3 className="text-xl font-semibold">{avgRating} stars⭐</h3>
                    <h3 className="text-xl font-semibold">{costForTwoMessage}</h3>
                </div>
                <h4 className="cuisines text-red-600 font-semibold underline"> {cuisines.join(", ")}</h4>
                <div className="locality flex gap-3 ">
                    <p className="font-semibold">outlet</p>
                    <p>{locality}</p>
                </div>
                <h4 className="font-semibold"> { slaString} </h4>
            </div>
        </div>
        
        <h2 className="mx-3 text-xl font-bold my-1">Menu</h2>
        <ul className="mx-5">
            {itemCards.map((item) =>(
                
                <MenuItems item = {item} />
            ))}
        </ul>
    </div>
}
export default ResMenu;