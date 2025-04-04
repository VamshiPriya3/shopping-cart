import React,{ useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import {PRODUCTS, FREE_GIFT, THRESHOLD} from '.data/products';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
 
  const removeFromCart=(id) =>
    setCart(prev => prev.filter(item =>item.id !== id));
  
  const subtotal=getSubtotal();
  const hasGift=cart.find(item => item.id ===FREE_GIFT.id);

  React.useEffect(() => {
    if(subtotal>= THRESHOLD && !hasGift){
      addToCart(FREE_GIFT);
    }else if (subtotal< THRESHOLD && hasGift){
      removeFromCart(FREE_GIFT.id);
    }
  },[subtotal]);

  return (
    
      <div className="container">
        <h1>Shopping cart</h1>
        <ProductList products ={PRODUCTS} addToCart={addToCart}/>
        <Cart cartItems={cart} removeFromCart={removeFromCart}/>
        <p>Subtotal: ${subtotal}</p>
        {subtotal < THRESHOLD && (
          <div className="progress-container">
            <p>Add $ {THRESHOLD -subtotal} more to get a free gift!</p>
        </div>)}
        </div>
  );
}
   

export default App;
