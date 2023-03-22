import React from "react";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div class="card-list">
      <div className="card">
        <div className="card-image">
          <img
            src="https://res.cloudinary.com/dphlf7a8o/image/upload/v1676400876/pexels-dilruba-sar%C4%B1%C3%A7imen-7870489_kodmsj.jpg"
            alt="skincare products"
          />
        </div>
        <div class="card-header">
          <span className="product-title">Serum</span>

          <span className="product-price">Kes. 5000</span>
        </div>
        
        <button className="cart-btn">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductCard;
