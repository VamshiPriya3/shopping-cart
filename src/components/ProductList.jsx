import React from "react"
 function ProductList({products,addToCart}) {
    return (
        <div className="product-list">
            <h2>Products</h2>
            {products.map(product =>(
                <div key ={product.id} className="product-card">
                    {product.name} - ${product.price}
                    <button className="add-to-cart-btn"  onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
        </div>
    );
 }

 export default ProductList;