import React from "react";
import "./HelpPage.css";
import { Link } from "react-router-dom";

import {
  FaQuestionCircle,
  FaTruck,
  FaHeadset,
  FaBirthdayCake,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaShippingFast
} from "react-icons/fa";

export default function HelpPage() {

  return (

    <div className="help-page">

      {/* HERO */}

      <div className="help-hero">

        <h1>Need Help?</h1>

        <p>
          We’re here to make your celebrations
          sweeter and stress free.
        </p>

      </div>

      {/* FAQ */}

      <div className="help-section">

        <h2>
          <FaQuestionCircle />
          Frequently Asked Questions
        </h2>

        <div className="faq-container">

          <div className="faq-card">
            <h3>How can I place a custom cake order?</h3>
            <p>
              Visit the Custom Cake page and
              fill out your cake requirements.
            </p>
          </div>

          <div className="faq-card">
            <h3>Do you provide same day delivery?</h3>
            <p>
              Yes, same day delivery is available
              for selected locations.
            </p>
          </div>

          <div className="faq-card">
            <h3>How can I track my order?</h3>
            <p>
              You can track your order from the
              Track Order page after checkout.
            </p>
          </div>

          <div className="faq-card">
            <h3>Which payment methods are available?</h3>
            <p>
              We support UPI, cards and Cash
              on Delivery.
            </p>
          </div>

        </div>

      </div>

      {/* DELIVERY */}

      <div className="help-section">

        <h2>
          <FaShippingFast />
          Delivery Services
        </h2>

        <div className="delivery-grid">

          <div className="delivery-card">

            <FaTruck className="delivery-icon" />

            <h3>Same Day Delivery</h3>

            <p>
              Fast and reliable cake delivery
              to your doorstep.
            </p>

          </div>

          <div className="delivery-card">

            <FaBirthdayCake className="delivery-icon" />

            <h3>Freshly Baked</h3>

            <p>
              Every cake is freshly prepared
              using premium ingredients.
            </p>

          </div>

          <div className="delivery-card">

            <FaClock className="delivery-icon" />

            <h3>Live Tracking</h3>

            <p>
              Stay updated with your order
              delivery progress.
            </p>

          </div>

        </div>

      </div>

      {/* CONTACT */}

      <div className="help-section">

        <h2>
          <FaHeadset />
          Contact Support
        </h2>

        <div className="contact-container">

          <div className="contact-card">

            <FaPhoneAlt className="contact-icon" />

            <h3>Phone</h3>

            <p>+91 9876543210</p>

          </div>

          <div className="contact-card">

            <FaEnvelope className="contact-icon" />

            <h3>Email</h3>

            <p>cakehouse@gmail.com</p>

          </div>

          <div className="contact-card">

            <FaMapMarkerAlt className="contact-icon" />

            <h3>Location</h3>

            <p>Nagpur, Maharashtra</p>

          </div>

        </div>

      </div>

      {/* BUTTONS */}

      <div className="help-buttons">

        <Link to="/order-status">

          <button>
            Track Order
          </button>

        </Link>

        <Link to="/cakes">

          <button>
            Browse Cakes
          </button>

        </Link>

        <Link to="/custom">

          <button>
            Custom Cake
          </button>

        </Link>

      </div>

    </div>

  );
}