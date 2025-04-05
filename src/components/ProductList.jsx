import React from "react";
import '../App.css'

 function ProductList({products,addToCart}) {
    return (
        <div className="section">
            <h2 className="heading">Products</h2>
            <div className="product-grid">
            {products.map(product =>(
            
            
                <div key ={product.id} className="product-card">
                    <div className="product-details">
                        <div className="product-name">
                    {product.name}</div>
                    <div className="product-price">{product.price}</div>
                    </div>
                    <button className="add-to-cart-btn"  onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
        </div>
        </div>
    );
 }

 export default ProductList;