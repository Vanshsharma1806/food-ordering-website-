
import { useCart } from "../context/CartContext";
import { ITEM_LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const Cart = ()=>{
    const { cartItems, incrementItem, decrementItem } = useCart();
    const navigate = useNavigate();

    const items = Object.values(cartItems);

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (items.length === 0) {
      return (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            onClick={() => navigate("/")}
          >
            Explore Restaurants
          </button>
        </div>
      );
    }

    return (
      <div className="mx-60 mt-10">
        <h1 className="text-3xl font-bold mb-5">Your Cart</h1>

        {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white shadow-md p-4 mb-3 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src={ITEM_LOGO + item.imageId}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">₹{item.price / 100}</p>
                  </div>
                </div>
            
                <div className="flex items-center">
                  <button
                    className="text-lg px-2 text-green-600 font-bold"
                    onClick={() => decrementItem(item.id)}
                  >
                    -
                  </button>
                  <span className="mx-3 font-semibold">{item.quantity}</span>
                  <button
                    className="text-lg px-2 text-green-600 font-bold"
                    onClick={() => incrementItem(item.id)}
                  >
                    +
                  </button>
                </div>
            </div>
        ))}

        <div className="text-right mt-6">
          <h2 className="text-xl font-bold">Total: ₹{total / 100}</h2>
          <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    );
}   

export default Cart;