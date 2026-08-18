import React, { useState } from "react";
import custombg from "../assets/custombg.jpg";
import { useNavigate } from "react-router-dom";
import "./CustomCake.css";

import {
  FaBirthdayCake,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaPenFancy
} from "react-icons/fa";

export default function CustomCake() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [file, setFile] = useState(null);

  const [totalPrice, setTotalPrice] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    flavor: "",
    weight: "",
    candle: "",
    designType: "",
    addons: [],
    date: "",
    message: ""
  });

  // =========================================================
  // PRICE LIST
  // =========================================================

  const designPrices = {
    Normal: 0,
    Custom: 300,
    Premium: 600
  };

  const weightPrices = {
    "250g": 300,
    "500g": 500,
    "1 Kg": 800,
    "2 Kg": 1500,
    "3 Kg": 2200,
    "5 Kg": 3500
  };

  const flavorPrices = {
    Chocolate: 100,
    Vanilla: 50,
    Strawberry: 80,
    "Red Velvet": 150,
    Butterscotch: 70
  };

  const candlePrices = {
    Normal: 0,
    Sparkle: 100,
    Number: 150,
    Premium: 250
  };

  const addonPrices = {
    "Photo Cake": 200,
    "Cake Topper": 100,
    "Greeting Card": 50,
    "Fresh Flowers": 300
  };

  const DELIVERY_CHARGE = 40;

  // =========================================================
  // CALCULATE PRICE
  // =========================================================

  const calculatePrice = (data) => {
    let price = 0;

    price += Number(weightPrices[data.weight] || 0);

    price += Number(flavorPrices[data.flavor] || 0);

    price += Number(candlePrices[data.candle] || 0);

    price += Number(designPrices[data.designType] || 0);

    if (data.addons && Array.isArray(data.addons)) {
      data.addons.forEach((addon) => {
        price += Number(addonPrices[addon] || 0);
      });
    }

    // Custom message charge
    if (
      data.message &&
      data.message.trim().length >= 10
    ) {
      price += 300;
    }

    // Delivery charge
    if (price > 0) {
      price += DELIVERY_CHARGE;
    }

    setTotalPrice(price);

    return price;
  };

  // =========================================================
  // HANDLE INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    const updatedData = {
      ...formData,
      [e.target.name]: e.target.value
    };

    setFormData(updatedData);

    calculatePrice(updatedData);
  };

  // =========================================================
  // HANDLE ADDON
  // =========================================================

  const handleAddonChange = (e) => {
    const { value, checked } = e.target;

    let updatedAddons = [...formData.addons];

    if (checked) {
      updatedAddons.push(value);
    } else {
      updatedAddons = updatedAddons.filter(
        (item) => item !== value
      );
    }

    const updatedData = {
      ...formData,
      addons: updatedAddons
    };

    setFormData(updatedData);

    calculatePrice(updatedData);
  };

  // =========================================================
  // HANDLE FILE
  // =========================================================

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    setFile(selectedFile || null);
  };

  // =========================================================
  // SUBMIT
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setServerError("");
    setSuccessMessage("");

    const newErrors = {};

    // =========================================================
    // NAME
    // =========================================================

    if (formData.name.trim().length < 3) {
      newErrors.name =
        "Name must be at least 3 characters";
    }

    // =========================================================
    // PHONE
    // =========================================================

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone =
        "Enter a valid 10-digit phone number";
    }

    // =========================================================
    // EMAIL
    // =========================================================

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Enter a valid email address";
    }

    // =========================================================
    // DATE
    // =========================================================

    const today =
      new Date().toISOString().split("T")[0];

    if (!formData.date) {
      newErrors.date =
        "Please select a delivery date";
    } else if (formData.date < today) {
      newErrors.date =
        "Please select today or a future date";
    }

    // =========================================================
    // MESSAGE
    // =========================================================

    if (formData.message.trim().length < 10) {
      newErrors.message =
        "Please enter more cake details";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // =========================================================
    // FINAL PRICE
    // =========================================================

    const finalPrice = calculatePrice(formData);

    if (!Number.isFinite(finalPrice)) {
      setServerError(
        "Unable to calculate cake price."
      );

      return;
    }

    // =========================================================
    // PRICE BREAKDOWN
    // =========================================================

    const priceBreakdown = {
      weight: Number(
        weightPrices[formData.weight] || 0
      ),

      flavor: Number(
        flavorPrices[formData.flavor] || 0
      ),

      candle: Number(
        candlePrices[formData.candle] || 0
      ),

      design: Number(
        designPrices[formData.designType] || 0
      ),

      addons: formData.addons.reduce(
        (sum, addon) =>
          sum + Number(addonPrices[addon] || 0),
        0
      ),

      customMessage:
        formData.message.trim().length >= 10
          ? 300
          : 0,

      delivery: DELIVERY_CHARGE
    };

    // =========================================================
    // FORM DATA FOR BACKEND
    // =========================================================

    const data = new FormData();

    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("flavor", formData.flavor);
    data.append("weight", formData.weight);
    data.append("date", formData.date);
    data.append("message", formData.message);
    data.append("candle", formData.candle);
    data.append("designType", formData.designType);

    data.append(
      "addons",
      JSON.stringify(formData.addons)
    );

    // IMPORTANT
    data.append(
      "totalPrice",
      String(finalPrice)
    );

    if (file) {
      data.append("image", file);
    }

    // =========================================================
    // SEND TO BACKEND
    // =========================================================

    try {
      console.log("Submitting custom cake order...");

      const res = await fetch(
        "http://localhost:5000/custom-cake",
        {
          method: "POST",
          body: data
        }
      );

      const result = await res.json();

      console.log("Backend response:", result);

      if (!res.ok) {
        throw new Error(
          result.message ||
            "Unable to submit custom cake order."
        );
      }

      // =======================================================
      // LOCAL STORAGE
      // =======================================================

      const savedOrder = {
        ...formData,

        totalPrice: finalPrice,

        deliveryCharge: DELIVERY_CHARGE,

        priceBreakdown: priceBreakdown,

        referenceImage: file
          ? file.name
          : "No reference image"
      };

      localStorage.setItem(
        "customCakeOrder",
        JSON.stringify(savedOrder)
      );

      console.log(
        "ORDER SAVED:",
        savedOrder
      );

      // =======================================================
      // SUCCESS
      // =======================================================

      setSuccessMessage(
        "Your custom cake request has been submitted successfully."
      );

      setTimeout(() => {
        navigate("/customsuccess");
      }, 1500);

    } catch (err) {
      console.log("ERROR:", err);

      setServerError(
        err.message ||
          "Unable to submit request."
      );
    }
  };

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <div className="customcake-page">

      {/* HERO */}

      <div
        className="customcake-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.45),
              rgba(0,0,0,0.45)
            ),
            url(${custombg})
          `
        }}
      >

        <div className="customcake-overlay">

          <h1>
            Create Your Dream Cake
          </h1>

          <p>
            Design your perfect cake for birthdays,
            weddings, anniversaries & every special moment.
          </p>

        </div>

      </div>

      {/* FORM SECTION */}

      <div className="customcake-container">

        {/* LEFT */}

        <div className="customcake-left">

          <span className="customcake-tag">
            Personalized Cakes
          </span>

          <h2>
            Crafted Fresh <br />
            Just For You
          </h2>

          <p>
            Tell us your cake idea and we’ll turn it
            into a delicious masterpiece with premium
            ingredients and beautiful designs.
          </p>

          <div className="customcake-features">

            <div className="cakefeature-box">

              <FaBirthdayCake
                className="cakefeature-icon"
              />

              <div>

                <h4>
                  Unique Designs
                </h4>

                <p>
                  Customized theme cakes for every occasion.
                </p>

              </div>

            </div>

            <div className="cakefeature-box">

              <FaPenFancy
                className="cakefeature-icon"
              />

              <div>

                <h4>
                  Custom Messages
                </h4>

                <p>
                  Add your own special wishes on cakes.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="customcake-form-box">

          <h3>
            Custom Cake Order Form
          </h3>

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

          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="cakeinput-box">

              <FaUser className="cakeinput-icon" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                minLength="3"
                onChange={handleChange}
                required
              />

              {errors.name && (
                <span className="error-text">
                  {errors.name}
                </span>
              )}

            </div>

            {/* PHONE */}

            <div className="cakeinput-box">

              <FaPhoneAlt
                className="cakeinput-icon"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                maxLength="10"
                onChange={handleChange}
                required
              />

              {errors.phone && (
                <span className="error-text">
                  {errors.phone}
                </span>
              )}

            </div>

            {/* EMAIL */}

            <div className="cakeinput-box">

              <FaEnvelope
                className="cakeinput-icon"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              {errors.email && (
                <span className="error-text">
                  {errors.email}
                </span>
              )}

            </div>

            {/* FLAVOR */}

            <select
              name="flavor"
              value={formData.flavor}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Cake Flavor
              </option>

              <option>Chocolate</option>
              <option>Vanilla</option>
              <option>Strawberry</option>
              <option>Red Velvet</option>
              <option>Butterscotch</option>

            </select>

            {/* WEIGHT */}

            <select
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Cake Weight
              </option>

              <option>250g</option>
              <option>500g</option>
              <option>1 Kg</option>
              <option>2 Kg</option>
              <option>3 Kg</option>
              <option>5 Kg</option>

            </select>

            {/* CANDLE */}

            <select
              name="candle"
              value={formData.candle}
              onChange={handleChange}
            >

              <option value="">
                Select Candle Type
              </option>

              <option value="Normal">
                Normal Candle (Free)
              </option>

              <option value="Sparkle">
                Sparkle Candle (+₹100)
              </option>

              <option value="Number">
                Number Candle (+₹150)
              </option>

              <option value="Premium">
                Premium Gold Candle (+₹250)
              </option>

            </select>

            {/* DATE */}

            <div className="cakeinput-box">

              <FaCalendarAlt
                className="cakeinput-icon"
              />

              <input
                type="date"
                name="date"
                min={
                  new Date()
                    .toISOString()
                    .split("T")[0]
                }
                value={formData.date}
                onChange={handleChange}
                required
              />

              {errors.date && (
                <span className="error-text">
                  {errors.date}
                </span>
              )}

            </div>

            {/* DESIGN */}

            <select
              name="designType"
              value={formData.designType}
              onChange={handleChange}
            >

              <option value="">
                Select Design Type
              </option>

              <option value="Normal">
                Normal Design
              </option>

              <option value="Custom">
                Custom Design (+₹300)
              </option>

              <option value="Premium">
                Premium Theme (+₹600)
              </option>

            </select>

            {/* MESSAGE */}

            <textarea
              name="message"
              placeholder="Describe your cake design or custom message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            {errors.message && (
              <span className="error-text">
                {errors.message}
              </span>
            )}

            {/* ADDONS */}

            <div className="cakeaddons-section">

              <h4>
                Choose Add-ons
              </h4>

              <label>
                <input
                  type="checkbox"
                  value="Photo Cake"
                  onChange={handleAddonChange}
                />
                Photo Cake (+₹200)
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Cake Topper"
                  onChange={handleAddonChange}
                />
                Cake Topper (+₹100)
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Greeting Card"
                  onChange={handleAddonChange}
                />
                Greeting Card (+₹50)
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Fresh Flowers"
                  onChange={handleAddonChange}
                />
                Fresh Flowers (+₹300)
              </label>

            </div>

            {/* IMAGE */}

            <div className="cakeinput-box">

              <label className="upload-label">
                Upload Reference Cake Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />

            </div>

            {/* PRICE */}

            <div className="cakeprice-summary">

              <h3>
                Total Price: ₹{totalPrice}
              </h3>

              <p>
                This is an estimated price based on your selections.
              </p>

              <p>
                Delivery charge of ₹40 is included.
              </p>

              <p>
                Custom message of ₹300 is added when
                the message contains at least 10 characters.
              </p>

              <p>
                Final price may vary depending on
                custom design complexity.
              </p>

            </div>

            {/* SUBMIT */}

            <button type="submit">
              Submit Request
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}