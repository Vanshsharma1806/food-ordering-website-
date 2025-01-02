import { ITEM_LOGO } from "../utils/constants";


const MenuItems = (props)=>{

    const {item} = props;
    const {name ,price, defaultPrice ,imageId} = item?.card?.info;

    return <div className="item-details flex justify-between p-2 shadow-md bg-gray-50 mt-2 rounded cursor-pointer hover:bg-gray-100">
        <div className="item-name-price"> 
            <h3 className="font-bold" >{name}</h3>
            {price ? <p>{price /100 +" "}Rs.</p> : <p>{defaultPrice /100 +" "}Rs.</p>}
        </div>
        <div className="item-logo-container ">
            <img className="item-logo h-24 w-24 rounded " src={ITEM_LOGO + imageId}></img>
        </div>
    </div>

}

export default MenuItems;