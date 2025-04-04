import React from "react"
 function ProductList({products,addToCart}) {
    return (
        <div>
            <h2>Products</h2>
            {products.map(product =>(
                <div key ={product.id}>
                    {product.name} - ${product.price}
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
        </div>
    );
 }

 export default ProductList;