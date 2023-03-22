import React from "react";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div class="card-list">
      <article class="card">
        <div class="card-image">
          <img
            src="https://res.cloudinary.com/dphlf7a8o/image/upload/v1676400876/pexels-dilruba-sar%C4%B1%C3%A7imen-7870489_kodmsj.jpg"
            alt="An orange painted blue, cut in half laying on a blue background"
          />
        </div>
        <div class="card-header">
          <span className="product-title">Serum</span>
          <span className="product-price">Kes. 2500</span>
        </div>
      </article>
    </div>
  );
}

export default ProductCard;
