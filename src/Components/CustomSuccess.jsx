import React from "react";
import "./CustomSuccess.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useNavigate } from "react-router-dom";

import {
  FaCheckCircle,
  FaHome,
  FaPhoneAlt,
  FaClock
} from "react-icons/fa";

export default function CustomSuccess() {

  const navigate = useNavigate();

  // =====================================================
  // GET ORDER DATA
  // =====================================================

  const orderData =
    JSON.parse(localStorage.getItem("customCakeOrder")) || {};

  // =====================================================
  // DOWNLOAD RECEIPT
  // =====================================================

  const downloadReceipt = () => {

    const doc = new jsPDF("p", "mm", "a4");

    // =====================================================
    // ORDER INFORMATION
    // =====================================================

    const orderId =
      "CC" + Date.now().toString().slice(-6);

    const orderDate =
      new Date().toLocaleDateString();

    const name =
      orderData.name || "-";

    const phone =
      orderData.phone || "-";

    const email =
      orderData.email || "-";

    const flavor =
      orderData.flavor || "-";

    const weight =
      orderData.weight || "-";

    const candle =
      orderData.candle || "Not Selected";

    const designType =
      orderData.designType || "Not Selected";

    const deliveryDate =
      orderData.date || "-";

    const message =
      orderData.message || "No message added";

    const addons =
      Array.isArray(orderData.addons)
        ? orderData.addons
        : [];

    const referenceImage =
      orderData.referenceImage || "No reference image";


    // =====================================================
    // PRICE DATA
    // =====================================================

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

    const designPrices = {
      Normal: 0,
      Custom: 300,
      Premium: 600
    };

    const addonPrices = {
      "Photo Cake": 200,
      "Cake Topper": 100,
      "Greeting Card": 50,
      "Fresh Flowers": 300
    };


    // =====================================================
    // INDIVIDUAL PRICES
    // =====================================================

    const weightPrice =
      Number(weightPrices[weight]) || 0;

    const flavorPrice =
      Number(flavorPrices[flavor]) || 0;

    const candlePrice =
      Number(candlePrices[candle]) || 0;

    const designPrice =
      Number(designPrices[designType]) || 0;


    // =====================================================
    // CUSTOM MESSAGE PRICE
    // =====================================================

    const hasCustomMessage =
      message &&
      message.trim().length >= 10;

    const customMessagePrice =
      hasCustomMessage ? 300 : 0;


    // =====================================================
    // ADD-ON PRICE
    // =====================================================

    let addonTotal = 0;

    addons.forEach((addon) => {
      addonTotal += Number(addonPrices[addon]) || 0;
    });


    // =====================================================
    // DELIVERY CHARGE
    // =====================================================

    const deliveryCharge = 40;


    // =====================================================
    // CALCULATE TOTAL
    // =====================================================

    const calculatedTotal =
      weightPrice +
      flavorPrice +
      candlePrice +
      designPrice +
      addonTotal +
      customMessagePrice +
      deliveryCharge;


    // =====================================================
    // USE SAVED TOTAL IF VALID
    // =====================================================

    const savedTotal =
      Number(orderData.totalPrice);

    const totalPrice =
      Number.isFinite(savedTotal) &&
        savedTotal > 0
        ? savedTotal + deliveryCharge
        : calculatedTotal;


    // =====================================================
    // ADD-ON DISPLAY
    // =====================================================

    const addonRows =
      addons.length > 0
        ? addons.map((addon) => [
          "Add-on",
          addon,
          `Rs. ${addonPrices[addon] || 0}`
        ])
        : [
          [
            "Add-on",
            "No add-ons selected",
            "Rs. 0"
          ]
        ];


    // =====================================================
    // HEADER
    // =====================================================

    doc.setFillColor(
      255,
      79,
      122
    );

    doc.rect(
      0,
      0,
      210,
      45,
      "F"
    );


    // =====================================================
    // SHOP NAME
    // =====================================================

    doc.setTextColor(
      255,
      255,
      255
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(30);

    doc.text(
      "SugarCandy",
      105,
      18,
      {
        align: "center"
      }
    );


    // =====================================================
    // SUBTITLE
    // =====================================================

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(11);

    doc.text(
      "Premium Bakery • Custom Cakes • Desserts",
      105,
      28,
      {
        align: "center"
      }
    );


    // =====================================================
    // CONTACT
    // =====================================================

    doc.setFontSize(9);

    doc.text(
      "Nagpur | +91 9876543210 | hello@sugarcandy.com",
      105,
      36,
      {
        align: "center"
      }
    );


    // =====================================================
    // TITLE
    // =====================================================

    doc.setTextColor(
      40,
      40,
      40
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(22);

    doc.text(
      "CUSTOM CAKE RECEIPT",
      15,
      60
    );

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(10);

    doc.setTextColor(
      120,
      120,
      120
    );

    doc.text(
      "Thank you for choosing SugarCandy",
      15,
      68
    );


    // =====================================================
    // ORDER INFORMATION BOX
    // =====================================================

    doc.setDrawColor(
      255,
      79,
      122
    );

    doc.roundedRect(
      125,
      52,
      72,
      30,
      4,
      4
    );

    doc.setTextColor(
      50,
      50,
      50
    );

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(10);

    doc.text(
      `Order No : ${orderId}`,
      132,
      62
    );

    doc.text(
      `Date : ${orderDate}`,
      132,
      70
    );

    doc.text(
      "Status : Pending Review",
      132,
      78
    );


    // =====================================================
    // CUSTOMER DETAILS
    // =====================================================

    doc.setFillColor(
      255,
      245,
      248
    );

    doc.roundedRect(
      15,
      95,
      85,
      55,
      4,
      4,
      "F"
    );

    doc.setTextColor(
      40,
      40,
      40
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(12);

    doc.text(
      "CUSTOMER DETAILS",
      20,
      108
    );

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(10);

    doc.text(
      `Name : ${name}`,
      20,
      118
    );

    doc.text(
      `Phone : ${phone}`,
      20,
      126
    );

    doc.text(
      `Email : ${email}`,
      20,
      134
    );


    // =====================================================
    // CAKE DETAILS
    // =====================================================

    doc.setFillColor(
      255,
      245,
      248
    );

    doc.roundedRect(
      110,
      95,
      85,
      55,
      4,
      4,
      "F"
    );

    doc.setTextColor(
      40,
      40,
      40
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(12);

    doc.text(
      "CAKE DETAILS",
      115,
      108
    );

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(10);

    doc.text(
      `Flavor : ${flavor}`,
      115,
      118
    );

    doc.text(
      `Weight : ${weight}`,
      115,
      126
    );

    doc.text(
      `Candle : ${candle}`,
      115,
      134
    );

    doc.text(
      `Design : ${designType}`,
      115,
      142
    );


    // =====================================================
    // PRICE BREAKDOWN
    // =====================================================

    autoTable(doc, {

      startY: 160,

      margin: {
        left: 15,
        right: 15
      },

      head: [
        [
          "Item",
          "Details",
          "Price"
        ]
      ],

      body: [

        [
          "Cake Weight",
          weight,
          `Rs. ${weightPrice}`
        ],

        [
          "Cake Flavor",
          flavor,
          `Rs. ${flavorPrice}`
        ],

        [
          "Candle",
          candle,
          `Rs. ${candlePrice}`
        ],

        [
          "Design",
          designType,
          `Rs. ${designPrice}`
        ],

        ...addonRows,

        [
          "Custom Message",
          hasCustomMessage
            ? "Custom message"
            : "No custom message",
          `Rs. ${customMessagePrice}`
        ],

        [
          "Delivery",
          "Home Delivery",
          `Rs. ${deliveryCharge}`
        ]

      ],

      headStyles: {

        fillColor: [
          255,
          79,
          122
        ],

        textColor: [
          255,
          255,
          255
        ],

        fontStyle: "bold",

        halign: "center"
      },

      bodyStyles: {

        textColor: [
          40,
          40,
          40
        ]
      },

      alternateRowStyles: {

        fillColor: [
          255,
          247,
          250
        ]
      },

      styles: {

        fontSize: 9,

        cellPadding: 4,

        valign: "middle"
      },

      columnStyles: {

        0: {
          cellWidth: 55,
          fontStyle: "bold"
        },

        1: {
          cellWidth: 85
        },

        2: {
          cellWidth: 40,
          halign: "right"
        }

      }

    });


    // =====================================================
    // TOTAL AMOUNT
    // =====================================================

    let totalY =
      doc.lastAutoTable.finalY + 8;


    // Prevent total from going too close to bottom
    if (totalY > 235) {

      doc.addPage();

      totalY = 25;

    }


    doc.setFillColor(
      255,
      241,
      245
    );

    doc.setDrawColor(
      255,
      79,
      122
    );

    doc.roundedRect(
      105,
      totalY,
      90,
      32,
      4,
      4,
      "FD"
    );


    doc.setTextColor(
      80,
      80,
      80
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(11);

    doc.text(
      "TOTAL AMOUNT",
      150,
      totalY + 10,
      {
        align: "center"
      }
    );


    doc.setTextColor(
      255,
      79,
      122
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(22);

    doc.text(
      `Rs. ${totalPrice}`,
      150,
      totalY + 24,
      {
        align: "center"
      }
    );


    // =====================================================
    // DELIVERY DETAILS
    // =====================================================

    let deliveryY =
      totalY + 42;


    doc.setFillColor(
      255,
      250,
      252
    );

    doc.roundedRect(
      15,
      deliveryY,
      80,
      35,
      4,
      4,
      "F"
    );

    doc.setTextColor(
      40,
      40,
      40
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(11);

    doc.text(
      "DELIVERY DETAILS",
      20,
      deliveryY + 10
    );

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(9);

    doc.text(
      `Delivery Date : ${deliveryDate}`,
      20,
      deliveryY + 20
    );

    doc.text(
      `Reference : ${referenceImage}`,
      20,
      deliveryY + 28
    );


    // =====================================================
    // SPECIAL MESSAGE
    // =====================================================

    doc.setFillColor(
      255,
      250,
      252
    );

    doc.roundedRect(
      100,
      deliveryY,
      95,
      35,
      4,
      4,
      "F"
    );

    doc.setTextColor(
      40,
      40,
      40
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(11);

    doc.text(
      "SPECIAL MESSAGE",
      105,
      deliveryY + 10
    );

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(9);

    const messageLines =
      doc.splitTextToSize(
        message,
        82
      );

    doc.text(
      messageLines.slice(0, 2),
      105,
      deliveryY + 20
    );


    // =====================================================
    // THANK YOU
    // =====================================================

    let thankYouY =
      deliveryY + 48;


    // If too low, create another page
    if (thankYouY > 255) {

      doc.addPage();

      thankYouY = 35;

    }


    doc.setTextColor(
      40,
      40,
      40
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(17);

    doc.text(
      "THANK YOU!",
      105,
      thankYouY,
      {
        align: "center"
      }
    );

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(10);

    doc.text(
      "Our cake artists will contact you shortly.",
      105,
      thankYouY + 8,
      {
        align: "center"
      }
    );


    // =====================================================
    // FOOTER
    // =====================================================

    const pageHeight =
      doc.internal.pageSize.getHeight();

    doc.setFillColor(
      255,
      79,
      122
    );

    doc.rect(
      0,
      pageHeight - 27,
      210,
      27,
      "F"
    );

    doc.setTextColor(
      255,
      255,
      255
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(11);

    doc.text(
      "Made Fresh • Designed With Love",
      105,
      pageHeight - 17,
      {
        align: "center"
      }
    );

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(9);

    doc.text(
      "Thank you for choosing SugarCandy Bakery",
      105,
      pageHeight - 9,
      {
        align: "center"
      }
    );


    // =====================================================
    // SAVE PDF
    // =====================================================

    doc.save(
      `Custom_Cake_Invoice_${orderId}.pdf`
    );

  };


  // =====================================================
  // PAGE UI
  // =====================================================

  return (

    <div className="cakesuccess-page">

      <div className="floating-circle circle1"></div>

      <div className="floating-circle circle2"></div>

      <div className="floating-circle circle3"></div>


      <div className="cakesuccess-card">

        <div className="success-icon-box">

          <FaCheckCircle
            className="success-icon"
          />

        </div>


        <span className="success-tag">
          ORDER CONFIRMED
        </span>


        <h1>
          Your Custom Cake Request
          Has Been Received
        </h1>


        <p>
          Thank you for choosing our bakery.
          Our cake artists will carefully review
          your customization request and contact
          you shortly for confirmation.
        </p>


        <div className="success-info">

          <div className="info-card">

            <FaClock />

            <span>
              Request Review Within 24 Hours
            </span>

          </div>


          <div className="info-card">
            <a
              href="tel:+919876543210"
              className="info-card"
            >
              <FaPhoneAlt />
              <span>Confirmation Call</span>
            </a>

          </div>

        </div>


        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
        >

          <FaHome />

          Back To Home

        </button>


        <button
          className="cakereceipt-btn"
          onClick={downloadReceipt}
        >

          Download Receipt

        </button>

      </div>

    </div>

  );

}