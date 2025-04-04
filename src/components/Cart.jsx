import React from "react"

function Cart({cartItems,removeFromCart}){
    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length ===0? (
                <p>Your cart is empty</p>
            ):(
                cartItems.map(item =>(
                    <div key ={item.id}>
                        {item.name} -${item.price} x {item.quantity}
                        <button onClick={()=>removeFromCart(item.id)}>Remove</button>
        </div>
                ))
            )}
        </div>
    );
}
export default Cart;