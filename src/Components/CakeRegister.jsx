import React, { useState } from "react";
import "./CakeRegister.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import bgcake from "../assets/frontcake1.jpg";

import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaBirthdayCake,
  FaArrowRight,
  FaPhoneAlt
} from "react-icons/fa";

export default function CakeRegister() {

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [contact, setContact] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();
    setServerError("");

    const newErrors = {};

    if (name.trim().length < 3) {
      newErrors.name =
        "Name must be at least 3 characters";
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      newErrors.email =
        "Please enter a valid email";
    }

    const phonePattern =
      /^[0-9]{10}$/;

    if (!phonePattern.test(contact)) {
      newErrors.contact =
        "Contact number must be exactly 10 digits";
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(password)) {
      newErrors.password =
        "Min 8 chars, upper, lower, number & special character required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    try {

      const response =
        await axios.post(
          "http://localhost:5000/register",
          {
            fname: name,
            email,
            password,
            contact,
          }
        );

      if (response.data.status === "ok") {

        setServerError("");
        setSuccessMessage(
          "Welcome back! You have successfully signed in."
        );
        // User data save karo
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.data)
        );

        setServerError("Registration completed successfully. Welcome to SugarCandy!");

        setTimeout(() => {
          navigate("/");
        }, 1500);

      } else {
        setSuccessMessage("");
        setServerError(response.data.message);

      }

    } catch (error) {

      setSuccessMessage("");


      setServerError(
        error.response?.data?.message ||
        "Unable to register. Please try again."
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
              Create Sweet <br />
              Memories
            </h1>

            <p>
              Join SugarCandy and
              order premium cakes
              crafted with love.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT FORM */}

      <div className="auth-form-side">

        <div className="auth-form-box">

          <h2>
            Create Account
          </h2>

          <p className="auth-subtitle">
            Register your account
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

          <form onSubmit={handleRegister}>


            {/* NAME */}

            <div className="auth-input-box">

              <FaUser className="auth-icon" />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);

                  setErrors({
                    ...errors,
                    name: ""
                  });
                }}
              />

              {errors.name && (
                <span className="error-text">
                  {errors.name}
                </span>
              )}

            </div>

            {/* EMAIL */}

            <div className="auth-input-box">

              <FaEnvelope className="auth-icon" />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
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

            <div className="auth-input-box">
              <FaPhoneAlt className="auth-icon" />
              <input
                type="tel"
                placeholder="Contact Number"
                value={contact}
                maxLength="10"
                onChange={(e) => {

                  setContact(e.target.value);

                  setErrors({
                    ...errors,
                    contact: ""
                  });

                }}
              />

              {errors.contact && (
                <span className="error-text">
                  {errors.contact}
                </span>
              )}
            </div>


            <button
              type="submit"
              className="auth-btn"
            >

              Register

              <FaArrowRight />

            </button>

          </form>

          <p className="auth-bottom-text">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}