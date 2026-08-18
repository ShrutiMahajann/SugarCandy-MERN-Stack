import React from "react";
import "./CakeOrderSuccess.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useNavigate } from "react-router-dom";
import logo from "../assets/SugarCandyLogo.png";

import {
  FaCheckCircle,
  FaHome,
  FaShoppingBag,
  FaClock,
  FaCreditCard
} from "react-icons/fa";

export default function CakeOrderSuccess() {

  const navigate = useNavigate();
  const orderData =
    JSON.parse(localStorage.getItem("lastOrder")) || {};

  const {
    customer = {},
    cartItems = [],
    paymentMethod = ""
  } = orderData;

  // ================= RECEIPT TOTAL =================

  const subtotal = cartItems.reduce((total, item) => {

    const price = Number(
      String(item.price)
        .replace("₹", "")
        .replace(",", "")
    );

    return total + (price * Number(item.qty || 1));

  }, 0);

  const deliveryCharge = 40;

  const finalTotal = subtotal + deliveryCharge;
  const downloadReceipt = () => {

    const doc = new jsPDF("p", "mm", "a4");

    const orderId =
      "SC" + Date.now().toString().slice(-6);

    // ================= HEADER =================

    doc.setFillColor(255, 79, 122);
    doc.rect(0, 0, 210, 45, "F");

    doc.setTextColor(255, 255, 255);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);

    doc.text(
      "SugarCandy",
      60,
      18
    );

    doc.setFontSize(11);

    doc.text(
      "Premium Bakery • Custom Cakes • Desserts",
      60,
      27
    );

    doc.setFontSize(9);

    doc.text(
      "Nagpur | +91 9876543210 | hello@sugarcandy.com",
      60,
      34
    );

    // ================= LOGO =================

    doc.addImage(
      logo,
      "PNG",
      18,   // X position
      8,    // Y position
      24,   // Width
      24    // Height
    );

    // ================= WATERMARK =================

    // doc.setTextColor(245, 245, 245);

    // doc.setFont("helvetica", "bold");

    // doc.setFontSize(70);

    // doc.text(
    //   "SUGARCANDY",
    //   105,
    //   170,
    //   {
    //     align: "center",
    //     angle: 45
    //   }
    // );

    // ================= TITLE =================

    doc.setTextColor(40, 40, 40);

    doc.setFontSize(22);

    doc.text(
      "ORDER RECEIPT",
      15,
      60
    );

    doc.setFontSize(10);

    doc.setTextColor(120);

    doc.text(
      "Thank you for ordering with SugarCandy",
      15,
      68
    );

    // ================= INVOICE BOX =================

    doc.setDrawColor(255, 79, 122);

    doc.roundedRect(
      125,
      52,
      72,
      30,
      4,
      4
    );

    doc.setFontSize(10);

    doc.setTextColor(50);

    doc.text(
      `Invoice No : ${orderId}`,
      132,
      62
    );

    doc.text(
      `Date : ${new Date().toLocaleDateString()}`,
      132,
      70
    );

    doc.text(
      `Status : PAID`,
      132,
      78
    );

    // ================= CUSTOMER CARD =================

    doc.setFillColor(255, 245, 248);

    doc.roundedRect(
      15,
      95,
      85,
      50,
      4,
      4,
      "F"
    );

    doc.setTextColor(40);

    doc.setFont("helvetica", "bold");

    doc.setFontSize(12);

    doc.text(
      "CUSTOMER DETAILS",
      20,
      108
    );

    doc.setFont("helvetica", "normal");

    doc.setFontSize(10);

    doc.text(
      `Name : ${customer.name || "-"}`,
      20,
      118
    );

    doc.text(
      `Phone : ${customer.phone || "-"}`,
      20,
      126
    );

    doc.text(
      `Email : ${customer.email || "-"}`,
      20,
      134
    );

    // ================= PAYMENT CARD =================

    doc.setFillColor(255, 245, 248);

    doc.roundedRect(
      110,
      95,
      85,
      50,
      4,
      4,
      "F"
    );

    doc.setFont("helvetica", "bold");

    doc.text(
      "PAYMENT DETAILS",
      115,
      108
    );

    doc.setFont("helvetica", "normal");

    doc.text(
      `Method : ${paymentMethod?.toUpperCase() || "-"}`,
      115,
      118
    );

    doc.text(
      `Status : PAID`,
      115,
      126
    );

    doc.text(
      `Items : ${cartItems.length}`,
      115,
      134
    );

    // ================= TABLE =================

    autoTable(doc, {

      startY: 160,

      head: [
        [
          "Cake",
          "Weight",
          "Qty",
          "Amount"
        ]
      ],

      body: cartItems.map((item) => [

        item.name,

        item.selectedSize || "-",

        item.qty,

        `Rs. ${item.price * item.qty}.00`

      ]),

      headStyles: {
        fillColor: [255, 79, 122]
      },

      styles: {
        fontSize: 10
      }
    });

    let finalY = doc.lastAutoTable.finalY + 10;

    // ================= PRICE DETAILS =================

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(70);

    doc.text(
      "Subtotal",
      135,
      finalY
    );

    doc.text(
      `Rs. ${subtotal}.00`,
      190,
      finalY,
      { align: "right" }
    );

    finalY += 8;

    doc.text(
      "Delivery Charges",
      135,
      finalY
    );

    doc.text(
      `Rs. ${deliveryCharge}.00`,
      190,
      finalY,
      { align: "right" }
    );

    finalY += 10;

    doc.setDrawColor(220, 220, 220);

    doc.line(
      130,
      finalY - 5,
      195,
      finalY - 5
    );

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);

    doc.text(
      "Grand Total",
      135,
      finalY + 3
    );

    doc.text(
      `Rs. ${finalTotal}.00`,
      190,
      finalY + 3,
      { align: "right" }
    );

    finalY += 15;

    // ================= TOTAL BOX =================

    doc.setFillColor(
      255,
      241,
      245
    );

    doc.setFillColor(
      255,
      241,
      245
    );

    doc.roundedRect(
      120,
      finalY,
      70,
      35,
      4,
      4,
      "F"
    );

    doc.setFont("helvetica", "normal");

    doc.setFontSize(10);

    doc.setTextColor(80);

    doc.text(
      "AMOUNT PAID",
      155,
      finalY + 10,
      { align: "center" }
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(24);

    doc.setTextColor(
      255,
      79,
      122
    );

    doc.text(
      `Rs. ${finalTotal}.00`,
      155,
      finalY + 24,
      { align: "center" }
    );

    doc.setFontSize(10);

    doc.setTextColor(80);


    // ================= FOOTER =================

    doc.setFillColor(
      255,
      79,
      122
    );

    doc.rect(
      0,
      270,
      210,
      27,
      "F"
    );

    doc.setTextColor(
      255,
      255,
      255
    );

    doc.setFontSize(11);

    doc.text(
      "Made Fresh • Delivered With Love",
      105,
      280,
      { align: "center" }
    );

    doc.setFontSize(9);

    doc.text(
      "Thank you for choosing SugarCandy Bakery",
      105,
      287,
      { align: "center" }
    );

    doc.save(
      `SugarCandy_Invoice_${orderId}.pdf`
    );
  };
  return (

    <div className="ordersuccess-page">

      {/* Floating Background */}

      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>
      <div className="floating-circle circle3"></div>
      <div className="floating-circle circle4"></div>

      {/* Success Card */}

      <div className="ordersuccess-card">

        <div className="success-icon-box">
          <FaCheckCircle className="success-icon" />
        </div>

        <div className="success-badge">
          ORDER SUCCESSFUL
        </div>

        <h1>Your Cake Order Is Confirmed</h1>

        <p>
          Thank you for choosing us. Your delicious cake order
          has been received successfully and is now being
          prepared by our expert bakery team with fresh
          ingredients and special care.
        </p>

        <div className="success-details">

          <div className="success-row">
            <span>
              <FaClock />
              Estimated Delivery
            </span>

            <strong>30 - 45 mins</strong>
          </div>

          <div className="success-row">
            <span>
              <FaCreditCard />
              Payment Status
            </span>

            <strong className="success-status">
              Successful
            </strong>
          </div>

        </div>

        <div className="success-note">
          Our bakery team has started preparing your order.
          You'll receive updates shortly.
        </div>

        <div className="success-btns">

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            <FaHome />
            Back To Home
          </button>

          <button
            className="shop-btn"
            onClick={() => navigate("/cakes")}
          >
            <FaShoppingBag />
            Order More
          </button>

          <button
            className="cakesuccessreceipt-btn"
            onClick={downloadReceipt}
          >
            Download Receipt
          </button>

        </div>

      </div>

    </div>

  );
}