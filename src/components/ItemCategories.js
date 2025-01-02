import MenuItems from "./MenuItems";
import { useState } from "react";
const ItemCategories = ({category, index, showItem, showIndex, setShowIndex})=> {
    const {title} = category?.card?.card;
    const {itemCards} = category?.card?.card;
    const handelClick = () => {
        if(showIndex === index){
            setShowIndex(null);
        }else{
            setShowIndex(index);
        }
    }

    return (
        <div className=" cursor-pointer" onClick={handelClick}  >
            <div className="flex justify-between p-2 bg-white mt-2 shadow-lg rounded cursor-pointer ">
                <h1 className="font-bold cursor-pointer">{title}({itemCards.length})</h1>
                <label className="cursor-pointer">🔽</label>
            </div>
            {showItem && itemCards.map((item) => (
                <MenuItems key={item?.card?.info?.id} item={item} />
            ))
            }
        </div>
    );
}
export default ItemCategories;