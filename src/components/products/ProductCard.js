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
        <div class="rating">
          <input type="radio" name="rating" id="star5" value="5"></input>
          <label for="star5">
            <i class="fas fa-star" aria-hidden="true"></i>
          </label>
          <input type="radio" name="rating" id="star4" value="4"></input>
          <label for="star4">
            <i class="fas fa-star" aria-hidden="true"></i>
          </label>
          <input type="radio" name="rating" id="star3" value="3"></input>
          <label for="star3">
            <i class="fas fa-star" aria-hidden="true"></i>
          </label>
          <input type="radio" name="rating" id="star2" value="2"></input>
          <label for="star2">
            <i class="fas fa-star" aria-hidden="true"></i>
          </label>
          <input type="radio" name="rating" id="star1" value="1"></input>
          <label for="star1">
            <i class="fas fa-star" aria-hidden="true"></i>
          </label>
        </div>
        <div className="btn">
          <button className="cart-btn">VIEW PRODUCT</button>

          <button className="cart-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
