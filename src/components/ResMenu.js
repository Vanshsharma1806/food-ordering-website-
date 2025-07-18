import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ItemCategories from "./ItemCategories";
import { useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
const ResMenu = ()=>{

    const {resId} = useParams();
    const resInfo = useResMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    
    if(resInfo == null) return <ShimmerMenu/>

    const {id, name, city, cuisines, costForTwoMessage, avgRating, locality, slaString} = resInfo;

    const itemCategories = resInfo.categories;

    return <div className="res-menu mx-60 my-5 ]">
        <div className="name-info bg-gray-100 shadow-lg rounded-3xl w-[825x] py-5 ">
            <h2 className="name p-1 m-6 text-3xl font-bold">{name}</h2>
            <div className="menu-info mx-5 pl-3 w-[740px] shadow-md bg-white rounded-xl py-1"> 
                <div className="ratings ml-1 flex gap-[80px]">
                    <h3 className="text-xl font-semibold">{avgRating} ⭐</h3>
                    <h3 className="text-xl font-semibold">{costForTwoMessage}</h3>
                </div>
                <h4 className="cuisines text-red-600 font-semibold underline cursor-pointer"> {cuisines.join(", ")}</h4>
                <div className="locality flex gap-3 ">
                    <p className="font-semibold">outlet</p>
                    <p>{locality}, {city}</p>
                </div>
                <h4 className="font-semibold"> { slaString} </h4>
            </div>
        </div>
        <h2 className="mx-3 text-xl font-bold my-1">Menu</h2>
        <ul className="mx-5">
            
            {itemCategories.map((category, index) =>(
                <ItemCategories key = {category.title} 
                    category = {category} 
                    index = {index}
                    showItem = {showIndex === index ? true : false} 
                    showIndex = {showIndex}
                    setShowIndex = {setShowIndex}
                />
            ))}
        </ul>
    </div>
}
export default ResMenu;