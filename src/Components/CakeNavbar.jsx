import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./CakeNavbar.css";
import { MdCake } from "react-icons/md";

import frontcake1 from "../assets/frontcake1.jpg";
import SugarCandyLogo from "../assets/SugarCandy_Logo.png"

import {
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaShoppingBag,
  FaClipboardList
} from "react-icons/fa";


export default function CakeNavbar() {

  const [showProfile, setShowProfile] =
    useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <>
      <div className="cake-nav">

        {/* BACKGROUND */}

        <img
          src={frontcake1}
          alt="frontcake"
          className="bg-image"
        />
        {/* NAVBAR */}

        <div className="Cnavbar">

          {/* LOGO */}

          <div className="cakelogo">

            <img
              src={SugarCandyLogo}
              alt="SugarCandy Logo"
              className="cakelogo-image"
            />

            <span>SugarCandy</span>

          </div>

          {/* RIGHT SIDE */}

          <div className="right-nav">

            {/* MENU */}

            <div className="cakenav-content">

              <Link to="/">Home</Link>

              <Link to="/help">Help</Link>

              {
                user ? (
                  <span className="user-nav-name">
                    Hi, {user.fname}
                  </span>
                ) : (
                  <Link to="/login">Login</Link>
                )
              }
            </div>

            {/* PROFILE */}

            <div className="cakeprofile-wrapper">

              <div
                className="cakeprofile"
                onClick={() =>
                  setShowProfile(!showProfile)
                }
              >
                <FaUserCircle />
              </div>

              {showProfile && (

                <div className="cakeprofile-dropdown">

                  {/* TOP */}

                  <div className="cakeprofile-top">

                    <FaUserCircle className="cakeprofile-big-icon" />

                    <div>

                      <h4> {user?.fname || "SugarCandy User"}</h4>

                      <p>{user?.email || "Welcome Back"}</p>

                    </div>

                  </div>

                  {/* MENU */}

                  <Link to="/order-status">

                    <span className="menu-icon">
                      <FaShoppingBag />
                    </span>

                    Track Your Orders

                  </Link>

                  <Link to="/cakes">

                    <span className="menu-icon">
                      <MdCake />
                    </span>

                    Colllections

                  </Link>

                  <Link to="/custom">

                    <span className="menu-icon">
                      <FaClipboardList />
                    </span>

                    Custom Orders

                  </Link>

                  <button className="cake-logout-btn" onClick={handleLogout}>
                    Logout
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

        {/* HERO SECTION */}

        <div className="cake-heading">

          <p className="cake-since">
            Handcrafted with love since 2018
          </p>

          <h2>
            Every Slice Tells A Story
          </h2>

          <p>
            Bespoke cakes crafted for your most
            cherished moments.
            <br />
            intimate celebrations to grand
            occasions, we make every bite
            <br />
            extraordinary.
          </p>

        </div>

        {/* BUTTONS */}

        <div className="cakenav-btn">

          <Link to="/custom">

            <button className="cake-orderbtn">
              Order Your Custom Cake
            </button>

          </Link>

          <Link to="/cakes">

            <button className="cake-browse">
              Browse Our Menu
            </button>

          </Link>

        </div>

      </div>

      {/* FOOTER */}
      <div className="footer-top-banner">
        <h2>Made With Love, Baked With Passion ❤️</h2>
        <p>
          Fresh cakes crafted daily for your sweetest celebrations.
        </p>
      </div>

      <footer className="cake-footer">

        <div className="cakefooter-container">

          {/* LEFT */}

          <div className="cakefooter-box">

            <div className="cakelogofooter">

              <img
                src={SugarCandyLogo}
                alt="SugarCandy Logo"
                className="cakelogo-footer-image"
              />

              <span>SugarCandy</span>

            </div>

            <p>
              Freshly baked cakes made with love
              and premium ingredients.
              Making every celebration sweeter
              since 2018.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div className="cakefooter-box">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>

            <Link to="/cakes">
              Our Cakes
            </Link>

            <Link to="/cart">
              Cart
            </Link>

            <Link to="/custom">
              Custom Cake
            </Link>

          </div>

          {/* CONTACT */}

          <div className="cakefooter-box">

            <h3>Contact Us</h3>

            <p>
              <FaPhoneAlt />
              +91 9876543210
            </p>

            <p>
              <FaEnvelope />
              sugarcandy@gmail.com
            </p>

            <p>
              <FaMapMarkerAlt />
              Nagpur, Maharashtra
            </p>

          </div>

          {/* SOCIAL */}

          <div className="cakefooter-box">

            <h3>Follow Us</h3>

            <div className="cakesocial-icons">

              <a href="https://instagram.com">

                <FaInstagram />

              </a>

              <a href="https://facebook.com">

                <FaFacebookF />

              </a>

              <a href="https://twitter.com">

                <FaTwitter />

              </a>

            </div>

          </div>

        </div>

        {/* FOOTER BOTTOM */}

        <div className="cakefooter-bottom">

          © 2026 Cake House | All Rights Reserved

        </div>

      </footer>

    </>

  );
}