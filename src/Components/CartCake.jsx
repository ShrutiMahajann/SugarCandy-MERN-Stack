import React, { useState, useEffect } from "react";
import "./CartCake.css";
import { FaArrowLeft,FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartCake() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(data);
  }, []);

  const updateCart = (updated) => {
    setCartItems(updated);
    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );
  };

  const increaseQty = (id) => {

    const updated = cartItems.map(item =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    );

    updateCart(updated);
  };

  const decreaseQty = (id) => {

    const updated = cartItems
      .map(item =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter(item => item.qty > 0);

    updateCart(updated);
  };

  const removeItem = (id) => {

    const updated =
      cartItems.filter(item => item.id !== id);

    updateCart(updated);
  };

  const total = cartItems.reduce(
    (acc, item) =>
      acc +
      Number(
        String(item.price).replace("₹", "")
      ) * item.qty,
    0
  );

  return (
    <>
    <div className="cakecart-page">
      <button className="cakeback-btn" onClick={() => navigate(-1)}>
      <FaArrowLeft /> Back
      </button>

      <h1 className="cakecart-title">
        <FaShoppingBag className="cart-title-icon" />
        Your Sweet Cart
      </h1>

      {cartItems.length === 0 ? (

        <div className="empty-cart">
          Your cart is empty 🍰
        </div>

      ) : (

        <div className="cakecart-container">

          {/* LEFT SIDE */}

          <div className="cakecart-left">

            <h2>Shopping Cart</h2>

            {cartItems.map(item => (

              <div
                className="cakecart-card"
                key={item.id}
              >

                <img
                  src={item.img}
                  alt={item.name}
                />

                <div className="cakecart-details">

                  <h3>{item.name}</h3>

                  <p>
                    ₹{
                      Number(
                        String(item.price)
                          .replace("₹", "")
                      )
                    }
                  </p>

                  <div className="cakeqty-box">

                    <button
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() =>
                        increaseQty(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

                <div className="cakecart-right">

                  <h4>
                    ₹
                    {
                      Number(
                        String(item.price)
                          .replace("₹", "")
                      ) * item.qty
                    }
                  </h4>

                  <button
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    🗑
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT SIDE */}

          <div className="cakecart-summary">

            <h3>Order Summary</h3>

            <div className="cakesummary-row">
              <span>Items</span>

              <span>
                {
                  cartItems.reduce(
                    (t, i) => t + i.qty,
                    0
                  )
                }
              </span>
            </div>

            <div className="cakesummary-row">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="cakecheckout-btn" onClick={() => navigate("/checkout")}>
               Proceed To Checkout
            </button>

          </div>

        </div>

      )}

    </div>
    </>
  );
}