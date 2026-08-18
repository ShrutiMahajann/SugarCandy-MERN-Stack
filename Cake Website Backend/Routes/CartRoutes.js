const express = require("express");
const router = express.Router();

const Cart = require("../models/CartModel");

router.post("/add", async (req, res) => {

  try {

    const cartItem = await Cart.create(req.body);

    res.json({
      success: true,
      cartItem
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }

});

module.exports = router;