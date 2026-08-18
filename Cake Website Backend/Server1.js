const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const cakeRoutes = require("./routes/CakeRoutes");
const cartRoutes = require("./routes/CartRoutes");
const orderRoutes = require("./routes/OrderRoutes");
const customCakeRoutes = require("./routes/customCakeRoutes");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/cakes", cakeRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/Uploads",express.static("Uploads"));
app.use(customCakeRoutes);

/* MongoDB Connection */

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });
/* Register Model */

const RegisterUser = require("./RegisterCakeDetail");

/* REGISTER API */

app.post("/register", async (req, res) => {

  console.log(
    "REGISTER HIT 🔥",
    req.body
  );

  try {

    const {
      fname,
      email,
      password,
      contact
    } = req.body;

    const oldUser =
      await RegisterUser.findOne({
        email
      });

    if (oldUser) {
      return res.send({
        status: "error",
        message:
          "User already exists"
      });
    }

    const user =
      await RegisterUser.create({
        fname,
        email,
        password,
        contact,
      });

    res.send({
      status: "ok",
      message:
        "Registered Successfully ✅",
      data: user,
    });

  } catch (err) {

    console.log(err);

    res.send({
      status: "error",
      message: err.message,
    });

  }
});

// Login
app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await RegisterUser.findOne({
      email,
      password
    });

    if (!user) {
      return res.send({
        status: "error",
        message: "Invalid Email or Password"
      });
    }

    res.send({
      status: "ok",
      message: "Login Successful",
      user
    });

  } catch (err) {

    res.send({
      status: "error",
      message: err.message
    });

  }

});


/* SERVER */

app.listen(5000, () => {
  console.log(
    "Server running on port 5000 🚀"
  );
});