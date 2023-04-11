import React from "react";
import "./Cart.css";



function Cart() {
  return (
    <div className="wrapper">
      <h1>Shopping Cart</h1>
      <div className="project">
        <div className="shop">
          <div className="box">
            <img
              src="https://res.cloudinary.com/dphlf7a8o/image/upload/v1676400876/pexels-dilruba-sar%C4%B1%C3%A7imen-7870489_kodmsj.jpg"
              alt="product"
            />
            <div className="content">
              <h3>Serum</h3>
              <h4>ksh. 5000</h4>
              <p className="unit">
                Quantity: <input name="" value="2"></input>
              </p>
              <p className="btn-area"><i class="fa fa-trash" aria-hidden="true"></i> <span className="btn2">Remove</span></p>
            </div>
          </div>

          <div className="box">
            <img
              src="https://res.cloudinary.com/dphlf7a8o/image/upload/v1676400876/pexels-dilruba-sar%C4%B1%C3%A7imen-7870489_kodmsj.jpg"
              alt="product"
            />
            <div className="content">
              <h3>Serum</h3>
              <h4>ksh. 5000</h4>
              <p className="unit">
                Quantity: <input name="" value="2"></input>
              </p>
              <p className="btn-area"><i class="fa fa-trash" aria-hidden="true"></i> <span className="btn2">Remove</span></p>
            </div>
          </div>


        </div>

        <div className="right-bar">
				{/* <p><span>Subtotal</span> <span>$120</span></p>
				<hr></hr> */}
				{/* <p><span>Tax (5%)</span> <span>$6</span></p> */}
				{/* <hr></hr> */}
				{/* <p><span>Shipping</span> <span>$15</span></p>
				<hr></hr> */}
				<p><span>Total</span> <span>ksh. 5000</span></p>
                <button className="checkout-btn"><i class="fa fa-shopping-cart"></i>Checkout</button>
			</div>
      </div>
    </div>
  );
}

export default Cart;
