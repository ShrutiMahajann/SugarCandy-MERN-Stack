const express = require("express");
const router = express.Router();

const Cake = require("../models/CakeModel");

router.get("/", async (req, res) => {
  try {
    const cakes = await Cake.find();
    res.json(cakes);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;