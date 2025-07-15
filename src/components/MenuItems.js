import { useState } from "react";
import { ITEM_LOGO } from "../utils/constants";
import { useCart } from "../context/CartContext";


const MenuItems = (props)=>{

    const {item} = props;
    const {id, name, price, imageId} = item;
    // const [quantity, setQuantity] = useState(0);
    const {cartItems, addItem, incrementItem, decrementItem} = useCart(); 
    const quantity = cartItems[id]?.quantity || 0;

    return <div className="item-details flex justify-between p-2 shadow-md bg-gray-50 mt-2 rounded  " onClick={(e) => e.stopPropagation()}>
        <div className="item-name-price"> 
            <h3 className="font-bold" >{name}</h3>
            <p>{price /100 +" "}Rs.</p> 
        </div>
        <div className="item-logo-container flex flex-col  ">
            <img className="item-logo h-24 w-24 rounded " src={ITEM_LOGO + imageId}></img>
            <div className="  bottom-1 h-8 flex rounded-lg items-center justify-between mt-1 bg-white shadow-lg ">
                {
                    quantity == 0 ?(
                        <button className=" text-green-500 font-bold w-full h-full items-center hover:bg-gray-200" onClick={ () => addItem(item)}>
                            ADD
                        </button>
                    )
                    :
                    (
                       <>
                            <button className="text-green-500 w-1/3 h-full font-extrabold hover:bg-gray-300" onClick={ () => decrementItem(id)}>
                                -
                            </button>
                            <span className="text-green-500 w-1/3 block text-center font-bold" >
                                {quantity}
                            </span>
                            <button className="text-green-500 w-1/3 h-full font-bold hover:bg-gray-300" onClick={() => incrementItem(id)}>
                                +
                            </button>
                       </>
                    )
                }
            </div>
        </div>
    </div>

}

export default MenuItems;