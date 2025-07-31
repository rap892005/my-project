import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Home } from "@mui/icons-material";
import { CartContext } from "../contexts/cartContext"; 
import "../App.css";

function Checkout() {
  const location = useLocation();
  const { cartItems, removeProduct, incrementQuantity, decrementQuantity, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className={`icon ${location.pathname === "/" ? "active" : ""}`}>
          <Home />
        </Link>

        <header className="store-name">My Store</header>

        <Link to="/Checkout" className={`icon ${location.pathname === "/Checkout" ? "active" : ""}`}>
          <ShoppingCart />
        </Link>
      </nav>

      <div className="checkout-container">
        <h2>Checkout</h2>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <p className="item-title">{item.title}</p>
                </div>
                <p>Price: ${item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeProduct(item.id)} className="remove-btn">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="checkout-actions">
            <p>Total: ${calculateTotal()}</p>
            <button onClick={clearCart} className="clear-btn">
              Clear Cart
            </button>
            <button className="checkout-btn">Proceed to Payment</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
