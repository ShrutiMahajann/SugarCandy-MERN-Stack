const express = require("express");
const router = express.Router();

// Model import
const Order = require("../models/OrderModel");

// Place Order API
router.post("/place-order", async (req, res) => {
  try {
    console.log("ORDER HIT 🔥", req.body);

    const { customer, items, total, paymentMethod } = req.body;

    // basic validation
    if (!customer || !items || !total || !paymentMethod) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    const order = new Order({
      customer,
      items,
      total,
      paymentMethod
    });

    const savedOrder = await order.save();

    console.log("SAVED ORDER ✅", savedOrder);

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: savedOrder
    });

  } catch (err) {
    console.log("ORDER ERROR ❌", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message
    });
  }
});

module.exports = router;