const express = require("express");
const multer = require("multer");
const CustomCake = require("../models/CustomCake");

const router = express.Router();

// =====================================================
// MULTER STORAGE
// =====================================================

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() + "-" + file.originalname
    );

  }

});

const upload = multer({
  storage
});

// =====================================================
// POST CUSTOM CAKE
// =====================================================

router.post(
  "/custom-cake",
  upload.single("image"),

  async (req, res) => {

    try {

      // =================================================
      // NAME VALIDATION
      // =================================================

      if (
        !req.body.name ||
        req.body.name.trim().length < 3
      ) {

        return res.status(400).json({

          success: false,

          message:
            "Name must be at least 3 characters"

        });

      }

      // =================================================
      // PHONE VALIDATION
      // =================================================

      if (
        !/^[0-9]{10}$/.test(
          req.body.phone
        )
      ) {

        return res.status(400).json({

          success: false,

          message:
            "Invalid phone number"

        });

      }

      // =================================================
      // EMAIL VALIDATION
      // =================================================

      if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
          req.body.email
        )
      ) {

        return res.status(400).json({

          success: false,

          message:
            "Invalid email address"

        });

      }

      // =================================================
      // PRICE
      // =================================================

      const totalPrice =
        Number(req.body.totalPrice);

      // IMPORTANT:
      // Prevent NaN from reaching MongoDB

      if (
        !Number.isFinite(totalPrice) ||
        totalPrice < 0
      ) {

        return res.status(400).json({

          success: false,

          message:
            "Invalid total price"

        });

      }

      // =================================================
      // ADDONS
      // =================================================

      let addons = [];

      if (req.body.addons) {

        try {

          addons =
            JSON.parse(
              req.body.addons
            );

        } catch (error) {

          return res.status(400).json({

            success: false,

            message:
              "Invalid add-ons data"

          });

        }

      }

      // =================================================
      // CREATE ORDER
      // =================================================

      const customCake =
        new CustomCake({

          name:
            req.body.name.trim(),

          phone:
            req.body.phone,

          email:
            req.body.email.trim(),

          flavor:
            req.body.flavor || "",

          weight:
            req.body.weight || "",

          candle:
            req.body.candle || "",

          designType:
            req.body.designType || "",

          addons:
            Array.isArray(addons)
              ? addons
              : [],

          totalPrice:
            totalPrice,

          date:
            req.body.date || "",

          message:
            req.body.message || "",

          image:
            req.file
              ? req.file.filename
              : ""

        });

      // =================================================
      // SAVE
      // =================================================

      await customCake.save();

      // =================================================
      // RESPONSE
      // =================================================

      res.status(200).json({

        success: true,

        message:
          "Custom Cake Order Saved",

        totalPrice:
          totalPrice

      });

    } catch (err) {

      console.log(
        "CUSTOM CAKE ERROR:",
        err
      );

      res.status(500).json({

        success: false,

        message:
          err.message ||
          "Server error"

      });

    }

  }
);

module.exports = router;