import React from "react";
import { FREE_GIFT } from "../data/products";

function Cart({cartItems,incrementQuantity,decrementQuantity}){
    return (
        <div>
            
            {cartItems.length ===0? (
                <p>Your cart is empty</p>
            ):(
                <div className="cart-items">
                {cartItems.map(item =>(
                    <div key ={item.id} className="cart-item">
                        <div className="cart-item-details">
                        <span>{item.name}</span>
                        <span>₹{item.price} -₹{item.quantity} </span>
                        </div>
                        {item.id === FREE_GIFT.id?(
                            <span className="free-gift-label">Free Gift</span>
                        ):(
                        <div>
                        <button className="decrement" onClick={()=>decrementQuantity(item.id)}>-</button>
                        <span style={{margin : '0 10px'}}>{item.quantity}</span>
                        <button className="increment" onClick={() => incrementQuantity(item.id)}>+</button>
                        </div>
                        )}
                    </div>
                ))}
            </div>
        )}
    </div>
);
}
export default Cart;