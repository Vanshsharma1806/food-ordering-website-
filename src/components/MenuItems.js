import { ITEM_LOGO } from "../utils/constants";


const MenuItems = (props)=>{

    const {item} = props;
    const {name ,price ,imageId} = item?.card?.info;

    return <div className="item-details flex justify-between p-2 bg-[#f0f0f0] mt-2 rounded cursor-pointer">
        <div className="item-name-price"> 
            <h3 className="font-bold" >{name}</h3>
            <p>{price /100 +" "}Rs.</p>
        </div>
        <div className="item-logo-container">
            <img className="item-logo h-24 w-24 rounded " src={ITEM_LOGO + imageId}></img>
        </div>
    </div>

}

export default MenuItems;