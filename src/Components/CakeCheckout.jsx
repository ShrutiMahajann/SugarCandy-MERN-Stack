import React, { useState } from "react";
import "./CakeCheckout.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SiPaytm } from "react-icons/si";
import { SiPhonepe } from "react-icons/si";
import {
  FaArrowLeft,
  FaCreditCard,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCity,
  FaMapPin,
  FaMoneyBillWave,
  FaGooglePay,
  FaCheckCircle
} from "react-icons/fa";
export default function CakeCheckout() {

  const navigate = useNavigate();
  const [selectedApp, setSelectedApp] = useState("");

  /* PAYMENT */

  const [paymentMethod, setPaymentMethod] =
    useState("");

  /* CART */

  const cartItems =
    JSON.parse(localStorage.getItem("cart")) || [];

  /* TOTAL */

  const total = cartItems.reduce(
    (acc, item) =>
      acc +
      Number(
        String(item.price).replace("Rs.", "")
      ) *
      item.qty,
    0
  );

  const delivery =
    total > 999 ? 0 : 40;

  const finalTotal =
    total + delivery;

  // Customer Details Store

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  /* PLACE ORDER */
const placeOrder = async () => {
  if (
    !customer.name.trim() ||
    !customer.email.trim() ||
    !customer.phone.trim() ||
    !customer.address.trim() ||
    !customer.city.trim() ||
    !customer.pincode.trim()
  ) {
    alert("Please fill all delivery details");
    return;
  }

  // Name Validation
  if (!/^[A-Za-z ]+$/.test(customer.name)) {
    alert("Name should contain only letters");
    return;
  }

  // Email Validation
  if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      customer.email
    )
  ) {
    alert("Please enter a valid email address");
    return;
  }

  // Phone Validation
  if (!/^[0-9]{10}$/.test(customer.phone)) {
    alert("Phone number must be 10 digits");
    return;
  }

  // Pincode Validation
  if (!/^[0-9]{6}$/.test(customer.pincode)) {
    alert("Pincode must be 6 digits");
    return;
  }

try {

  await axios.post(
    "http://localhost:5000/api/orders/place-order",
    {
      customer,
      items: cartItems,
      total: finalTotal,
      paymentMethod
    }
  );

  localStorage.setItem(
    "lastOrder",
    JSON.stringify({
      customer,
      cartItems,
      paymentMethod,
      finalTotal
    })
  );


  localStorage.removeItem("cart");

  navigate("/order");

} catch (err) {

  console.log(err);

}

};



return (

  <div className="cakecheckout-page">

    {/* TOP */}

    <div className="cakecheckout-top">

      <button
        className="cakecheckout-back-btn"
        onClick={() => navigate(-1)}
      >

        <FaArrowLeft />

        Back

      </button>

      <h1 className="cakecheckout-title">

        <FaShoppingBag className="cakecheckout-icon" />

        Sweet Checkout

      </h1>

    </div>

    {/* CONTAINER */}

    <div className="cakecheckout-container">

      {/* LEFT */}

      <div className="cakecheckout-left">

        {/* DELIVERY DETAILS */}

        <div className="cakecheckout-box">

          <h2>

            <FaMapMarkerAlt />

            Delivery Details

          </h2>

          <div className="cakecheckout-inputs">

            <div className="cakeinput-box">

              <FaUser className="cakeinput-icon" />

              <input type="text" placeholder="Full Name" pattern="[A-Za-z ]+" value={customer.name}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    name: e.target.value
                  })
                } />

            </div>

            <div className="cakeinput-box">

              <FaEnvelope className="cakeinput-icon" />

              <input type="email" placeholder="Email Address" value={customer.email}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    email: e.target.value
                  })
                } />

            </div>

            <div className="cakeinput-box">

              <FaPhoneAlt className="cakeinput-icon" />

              <input
                type="text" placeholder="Phone Number" maxLength="10"
                pattern="[0-9]{10}" value={customer.phone}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    phone: e.target.value.replace(/\D/g, "")
                  })
                } />

            </div>

            <div className="cakeinput-box textarea-box">

              <FaMapMarkerAlt
                className="cakeinput-icon textarea-icon"
              />

              <textarea
                rows="4"
                placeholder="Full Address"
                value={customer.address}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    address: e.target.value
                  })
                }
              />
            </div>

            <div className="cakeinput-box">

              <FaCity className="cakeinput-icon" />

              <input
                type="text"
                placeholder="City"
                value={customer.city}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    city: e.target.value
                  })
                }
              />
            </div>

            <div className="cakeinput-box">

              <FaMapPin className="cakeinput-icon" />

              <input
                type="text"
                placeholder="Pincode" maxLength="6"
                pattern="[0-9]{6}"
                value={customer.pincode}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    pincode: e.target.value.replace(/\D/g, "")
                  })
                }
              />

            </div>

          </div>

        </div>

        {/* PAYMENT */}

        <div className="cakecheckout-box">

          <h2>

            <FaCreditCard />

            Payment Method

          </h2>

          <div className="cakepayment-options">

            {/* COD */}

            <div className={`payment-card ${paymentMethod === "cod" ? "active-payment" : ""
              }`}
              onClick={() => {
                setPaymentMethod("cod");
                setSelectedApp("");
              }}
            >

              <div className="payment-content">

                <FaMoneyBillWave />

                <span>
                  Cash On Delivery
                </span>

              </div>

            </div>

            {/* UPI */}
            <div className={`payment-card ${paymentMethod === "upi" ? "active-payment" : ""
              }`} onClick={() => { setPaymentMethod("upi"); }}>

              <div className="payment-content">

                <FaGooglePay />

                <span>
                  UPI Payment
                </span>

              </div>

            </div>

            {/* CARD */}

            <div className={`payment-card ${paymentMethod === "card" ? "active-payment" : ""}`}
              onClick={() => {
                setPaymentMethod("card");
                setSelectedApp("");
              }}>

              <div className="payment-content">

                <FaCreditCard />

                <span>
                  Debit / Credit Card
                </span>

              </div>

            </div>

          </div>

          {/* ================= UPI FORM ================= */}

          {paymentMethod === "upi" && (

            <div className="upi-apps-box">

              <h3>Select Payment App</h3>

              <div className="upi-apps">

                <div
                  className={`upi-app ${selectedApp === "gpay"
                    ? "active-app"
                    : ""
                    }`}
                  onClick={() => {
                    setSelectedApp("gpay");
                  }}
                >
                  <FaGooglePay />
                  <span>Google Pay</span>
                </div>

                <div
                  className={`upi-app ${selectedApp === "phonepe"
                    ? "active-app"
                    : ""
                    }`}
                  onClick={() => {
                    setSelectedApp("phonepe");
                  }}
                >
                  <SiPhonepe />
                  <span>PhonePe</span>
                </div>

                <div
                  className={`upi-app ${selectedApp === "paytm"
                    ? "active-app"
                    : ""
                    }`}
                  onClick={() => {
                    setSelectedApp("paytm");
                  }}
                >
                  <SiPaytm />
                  <span>Paytm</span>
                </div>

              </div>
              {selectedApp && (

                <div className="payment-demo-page">

                  <h2>
                    {selectedApp.toUpperCase()}
                    Payment
                  </h2>

                  <p>
                    Amount To Pay:
                    ₹{finalTotal}
                  </p>

                  <div className="fake-qr">

                    QR CODE

                  </div>

                  <button
                    className="paynow-btn"
                    onClick={() => {

                      alert(
                        "Payment Successful ✅"
                      );

                      placeOrder();

                    }}
                  >
                    Pay ₹{finalTotal}
                  </button>

                </div>

              )}

            </div>

          )}

          {/* ================= CARD PAYMENT ================= */}

          {paymentMethod === "card" && (

            <div className="payment-extra-box">

              <h3>Card Details</h3>

              <input
                type="text"
                placeholder="Card Holder Name"
              />

              <input
                type="text"
                placeholder="Card Number"
                maxLength="16"
              />

              <div className="card-row">

                <input
                  type="text"
                  placeholder="MM/YY"
                />

                <input
                  type="password"
                  placeholder="CVV"
                  maxLength="3"
                />

              </div>

              <button
                className="paynow-btn"
                onClick={() => {

                  alert(
                    "Card Payment Successful ✅"
                  );

                  placeOrder();

                }}
              >
                Pay ₹{finalTotal}
              </button>

            </div>

          )}
          {/* ================= COD ================= */}

          {paymentMethod === "cod" && (

            <div className="cod-box">

              <FaCheckCircle />

              <p>
                Your order will be paid
                at delivery time.
              </p>

            </div>

          )}

        </div>

      </div>

      {/* RIGHT */}

      <div className="cakecheckout-summary">

        <h2>Order Summary</h2>

        {cartItems.map(item => (

          <div
            className="cakesummary-item"
            key={item.id}
          >

            <img
              src={item.image || item.img}
              alt={item.name}
            />

            <div className="summary-info">

              <h4>{item.name}</h4>

              <p>

                ₹
                {
                  Number(
                    String(item.price)
                      .replace("₹", "")
                  )
                }

                × {item.qty}

              </p>

            </div>

          </div>

        ))}

        {/* PRICE */}

        <div className="cakesummary-price">

          <div className="cakeprice-row">

            <span>Subtotal</span>

            <span>₹{total}</span>

          </div>

          <div className="cakeprice-row">

            <span>Delivery</span>

            <span>

              {
                delivery === 0
                  ? "FREE"
                  : `₹${delivery}`
              }

            </span>

          </div>

          <div className="cakeprice-row total-row">

            <span>Total</span>

            <span>
              ₹{finalTotal}
            </span>

          </div>

        </div>

        {/* BUTTON */}

        <button className="cakeplace-order-btn"
          onClick={() => {
            if (paymentMethod === "upi" && !selectedApp) {
              alert("Please select Google Pay / PhonePe / Paytm");
              return;
            }
            placeOrder();
          }}>
          Place Order
        </button>


      </div>

    </div>

  </div>
);
}