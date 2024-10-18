import { ITEM_LOGO } from "../utils/constants";


const MenuItems = (props)=>{

    const {item} = props;
    const {name ,price ,imageId} = item?.card?.info;

    return <div className="item-details">
        <div className="item-name-price"> 
            <h3>{name}</h3>
            <p>{price /100 +" "}Rs.</p>
        </div>
        <div className="item-logo-container">
            <img className="item-logo" src={ITEM_LOGO + imageId}></img>
        </div>
    </div>

}

export default MenuItems;