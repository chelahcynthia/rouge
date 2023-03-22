import React from "react";
import "./ProductPage.css";

function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-image">
        <img
          src="https://res.cloudinary.com/dfdxhrjcc/image/upload/v1676545829/rouge/pexels-pnw-production-8490222_dsu7ba.jpg"
          alt="serum"
        />
        {/* <img
          src="https://res.cloudinary.com/dfdxhrjcc/image/upload/v1677069862/rouge/serum-plants_csyc72.jpg"
          alt="serum"
        /> */}
      </div>
      <div className="product-details">
        <h1 className="product-name">Serum</h1>
        <p className="product-price">Kes. 5000</p>
        <p className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          distinctio dolor officiis est? Enim ipsa quae nesciunt temporibus sint
          inventore numquam autem expedita laudantium architecto, fugit, rem,
          totam esse cum. Voluptatem ratione modi eius veritatis, beatae
          inventore exercitationem velit animi repellendus amet neque dolore cum
          quo quas.
        </p>
        <button className="add-to-cart-button">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductPage;
