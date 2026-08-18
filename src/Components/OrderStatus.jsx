import React from "react";
import "./OrderStatus.css";

import { useNavigate } from "react-router-dom";

import {
  FaCheckCircle,
  FaTruck,
  FaBoxOpen,
  FaClock
} from "react-icons/fa";

export default function OrderStatus() {

  const navigate = useNavigate();

  return (

    <div className="orderstatus-page">

      <div className="orderstatus-card">

        {/* TOP */}

        <div className="order-top">

          <FaCheckCircle className="success-icon" />

          <h1>Order Placed Successfully</h1>

          <p>
            Your delicious cake order has been confirmed
            and is being freshly prepared.
          </p>

        </div>

        {/* ORDER DETAILS */}

        <div className="order-info">

          <div className="order-info-box">

            <span>Order ID</span>

            <h3>#SC2026CAKE</h3>

          </div>

          <div className="order-info-box">

            <span>Estimated Delivery</span>

            <h3>30 - 45 Minutes</h3>

          </div>

        </div>

        {/* TIMELINE */}

        <div className="status-timeline">

          {/* STATUS 1 */}

          <div className="status-box active">

            <div className="status-icon">
              <FaCheckCircle />
            </div>

            <div className="status-content">

              <h3>Order Confirmed</h3>

              <p>
                Your order has been placed successfully
              </p>

            </div>

          </div>

          {/* STATUS 2 */}

          <div className="status-box active">

            <div className="status-icon">
              <FaBoxOpen />
            </div>

            <div className="status-content">

              <h3>Baking in Progress</h3>

              <p>
                Our chefs are preparing your fresh cake
              </p>

            </div>

          </div>

          {/* STATUS 3 */}

          <div className="status-box pending">

            <div className="status-icon">
              <FaTruck />
            </div>

            <div className="status-content">

              <h3>Out For Delivery</h3>

              <p>
                Delivery partner will arrive soon
              </p>

            </div>

          </div>

          {/* STATUS 4 */}

          <div className="status-box pending">

            <div className="status-icon">
              <FaClock />
            </div>

            <div className="status-content">

              <h3>Delivered</h3>

              <p>
                Enjoy your delicious cake 
              </p>

            </div>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="order-btns">

          <button
            className="track-btn"
            onClick={() => navigate("/cakes")}
          >
            Order More
          </button>

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            Back To Home
          </button>

        </div>

      </div>

    </div>

  );
}