import React from "react";
import "./ProductPage.css";

function ProductPage() {
  return (
  <div className="page-container">
  <ul className="card-wrapper">
    <li className="card">
      <img src="https://res.cloudinary.com/dphlf7a8o/image/upload/v1676400905/pexels-alesia-kozik-7796985_oe3ah4.jpg" alt="imagecard" />
      <h1>Skin oil Serum</h1>
      <p>Lorem ipsum sit dolor amit</p>
      <button className="page-btn" type="submit">Buy Now</button>
    </li>
    {/* <li className="card">
      <img src="https://res.cloudinary.com/dphlf7a8o/image/upload/v1676400905/pexels-alesia-kozik-7796985_oe3ah4.jpg" alt="imagecard" />
      <h1>Skin oil Serum</h1>
      <p>Lorem ipsum sit dolor amit</p>
    </li> */}

  </ul>
    </div>
  );
}

export default ProductPage;
