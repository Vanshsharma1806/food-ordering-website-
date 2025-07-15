import { createContext, useContext } from "react";
import { useState } from "react";
const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState({});

    const addItem = (item) => {
        setCartItems((prev) => ({
            ...prev,
            [item.id]: {...item, quantity: 1},
        }));
    }

    const incrementItem = (itemId) =>{
        setCartItems((prev) => ({
            ...prev,
            [itemId]: {...prev[itemId],
                quantity : (prev[itemId]?.quantity || 0) + 1,
            },
        }));
    };

    const decrementItem = (itemId) => {
        setCartItems((prev) => {
            const currQty = prev[itemId]?.quantity || 0;
            if(currQty <= 1){
                const newCart = {...prev};
                delete newCart[itemId];
                return newCart;
            }else{
                return {
                    ...prev,
                    [itemId] : {...prev[itemId],
                        quantity: currQty -1,
                    }
                };
            }
        });
    };


    return (
        <CartContext.Provider value={{cartItems, addItem, incrementItem, decrementItem}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = ()=> useContext(CartContext);