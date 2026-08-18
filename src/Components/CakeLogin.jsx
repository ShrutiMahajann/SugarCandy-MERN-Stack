import React, { useState } from "react";
import "./CakeLogin.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import bgcake from "../assets/frontcake1.jpg";

import {
  FaEnvelope,
  FaLock,
  FaBirthdayCake,
  FaArrowRight
} from "react-icons/fa";

export default function CakeLogin() {

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {

    e.preventDefault();
    setServerError("");

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (
      email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    if (password && password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        }
      );

      if (response.data.status === "ok") {

        setServerError("");

        setSuccessMessage(
          "Welcome back! You have successfully signed in."
        );

        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        setTimeout(() => {
          navigate("/");
        }, 1500);

      } else {
        setSuccessMessage("");
        setServerError(
          response.data.message
        );

      }

    } catch (error) {

      setSuccessMessage("");

      setServerError(
        error.response?.data?.message ||
        "Unable to login. Please try again."
      );
    }

  };
  return (

    <div className="auth-page">

      {/* LEFT IMAGE */}

      <div className="auth-image-side">

        <img
          src={bgcake}
          alt="cake"
          className="auth-bg-image"
        />

        <div className="auth-overlay">

          <div className="auth-overlay-content">

            <div className="auth-logo">

              <FaBirthdayCake />

              <span>SugarCandy</span>

            </div>

            <h1>
              Sweet Moments <br />
              Start Here
            </h1>

            <p>
              Delicious handcrafted cakes
              for birthdays, weddings &
              every special celebration.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT FORM */}

      <div className="auth-form-side">

        <div className="auth-form-box">

          <h2>
            Welcome Back
          </h2>

          <p className="auth-subtitle">
            Login to continue
          </p>

          {serverError && (
            <div className="server-error">
              {serverError}
            </div>
          )}

          {successMessage && (
            <div className="success-message">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleLogin}>

            {/* EMAIL */}

            <div className="auth-input-box">

              <FaEnvelope className="auth-icon" />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                required
                onChange={(e) => {

                  setEmail(e.target.value);

                  setErrors({
                    ...errors,
                    email: ""
                  });

                }}
              />

              {errors.email && (
                <span className="error-text">
                  {errors.email}
                </span>
              )}

            </div>

            {/* PASSWORD */}

            <div className="auth-input-box">

              <FaLock className="auth-icon" />

              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                minLength="6"
                onChange={(e) => {

                  setPassword(e.target.value);

                  setErrors({
                    ...errors,
                    password: ""
                  });

                }}
              />

              {errors.password && (
                <span className="error-text">
                  {errors.password}
                </span>
              )}

            </div>

            <button
              type="submit"
              className="auth-btn"
            >

              Login

              <FaArrowRight />

            </button>

          </form>

          <p className="auth-bottom-text">

            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}