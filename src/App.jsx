import React,{ useState,useEffect} from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import {PRODUCTS, FREE_GIFT, THRESHOLD} from "./data/products";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [cart, setCart] = useState([])
  const getSubtotal=() =>
    cart.reduce((total,item) =>total + item.price * item.quantity,0);
  const addToCart=(product) => {
    setCart(prev => {
      const exists =prev.find(item => item.id === product.id);
      if(exists){
        return prev.map(item=>
          item.id === product.id? {...item,quantity: item.quantity + 1} : item 
        );
      }else{
          return[...prev, {...product, quantity: 1}];
        }
      
    }); 
  }
 const incrementQuantity=(id)=>{
  setCart((prev)=>
    prev.map((item)=>(item.id=== id?{...item,quantity:item.quantity+1}:item)
)
);
 }
  const decrementQuantity  =(id)=>{
    setCart((prev)=>
    prev.map((item)=>
    item.id === id? {...item,quantity:item.quantity-1}:item
  ).filter((item)=>item.quantity>0)
);
  }
  const removeFromCart=(id) =>
    setCart(prev => prev.filter(item =>item.id !== id));
  
  const subtotal=getSubtotal();
  const hasGift=cart.find(item => item.id ===FREE_GIFT.id);

  useEffect(() => {
    if(subtotal>= THRESHOLD && !hasGift){
      addToCart(FREE_GIFT);
    }else if (subtotal< THRESHOLD && hasGift){
      removeFromCart(FREE_GIFT.id);
    }
  },[subtotal]);

  return (
    
      <div className="container">
        <h1 className="main-heading">Shopping Cart App</h1>
        <ProductList products ={PRODUCTS} addToCart={addToCart}/>
        
        <h2 className="section-title">Cart Summary</h2>
        
        <div className="cart-summary-box">
           <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>
          <hr style={{width:"100%",height:"1px"}}/>
          <div className="progress-container">
            <div className="progress-bar" style={{width:`${(subtotal/THRESHOLD) * 100}%`,backgroundColor:subtotal>=THRESHOLD?"green":"blue",}}>

            </div>
          </div>
          
          {subtotal<THRESHOLD?(
            <p  className="gift-info">Add ₹{THRESHOLD -subtotal}more to get a free gift!</p>

          ):(
            <p className="gift-info success">You've earned a free gift!</p>
          )}
          </div>
          <h2 className="section-title">Cart Items</h2>
          <div className="cart-summary-box">
          
          <Cart cartItems={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
        </div>
        </div>
        
  );
}
   

export default App;
