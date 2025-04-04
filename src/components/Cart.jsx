import React from "react"

function Cart({cartItems,removeFromCart}){
    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItems.length ===0? (
                <p>Your cart is empty</p>
            ):(
                cartItems.map(item =>(
                    <div key ={item.id} className="cart-item">
                        <span>{item.name} -${item.price} x {item.quantity}</span>
                        
                        <button className="remove-btn" onClick={()=>removeFromCart(item.id)}>Remove</button>
        </div>
                ))
            )}
        </div>
    );
}
export default Cart;