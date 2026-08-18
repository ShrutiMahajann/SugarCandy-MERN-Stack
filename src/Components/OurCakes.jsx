import "./OurCakes.css";
import { BsCart3 } from "react-icons/bs";
import { GiCakeSlice } from "react-icons/gi";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTrash
} from "react-icons/fa";

import { useNavigate, useParams, Link } from "react-router-dom";
import chocolatecake from '../assets/ChocolateCake.jpg'
import chocolatecheese from '../assets/ChocolateCheesecake.jpg'
import chocolatedobege from '../assets/ChocolateDobergeCake.jpg'
import chocolatemousse from '../assets/ChocolateMousseCake.jpg'
import peanutbutter from '../assets/PeanutButterCake.jpg'
import blackforest from '../assets/BlackForestCake.jpg'
import blackout from '../assets/BlackoutCake.jpg'
import truffle from '../assets/ChocolateTruffleCake.jpg'
import cookiecream from '../assets/CookiesCreamCake.jpg'
import germancake from '../assets/GermanChocolatCake.jpg'
import oreocake from '../assets/OreoCake.jpg'
import kunafa from '../assets/kunafacake.jpg'

import strawshort from '../assets/ShortcCake.jpg'
import strawcheese from '../assets/StrawberryCheeseCake.jpg'
import rhubarbstraw from '../assets/RhubarbStrawberryCake.jpg'
import lemonstraw from '../assets/LemonStrawberryCake.jpg'
import decadestraw from '../assets/DecadentChocoStrawCake.jpg'
import strawcoconut from '../assets/StrawberryCoconutCake.jpg'
import strawpoke from '../assets/StrawberryPokeCake.jpg'
import strawupside from '../assets/StrawberryUpsideDownCake.jpg'

import rasberryvanilla from '../assets/RaspberryVanilla.jpg'
import strawvanilla from '../assets/VanillaStrawberry.jpg'
import chocovanilla from '../assets/VanillaChocolate.jpg'
import berryvanilla from '../assets/BerryVanilla.jpg'
import whitechocovanilla from '../assets/WhiteChocolate.jpg'

import rainbow from '../assets/rainbowcake.jpg'
import biscoff from '../assets/biscoffcake.jpg'
import christmas from '../assets/christmascake.jpg'
import cartoon from '../assets/carrotcake.jpg'
import ocean from '../assets/oceancake.jpg'
import delight from '../assets/delightcake.jpg'
import photocake from '../assets/photocake.jpg'
import kitkat from '../assets/kirtkatcake.jpg'

import wedding from "../assets/weddingcake.jpg"
import anniversary from "../assets/anniversarycake.jpg"
import engagment from "../assets/engagementcake.jpg"
import valentine from "../assets/valentinescake.jpg"
import divorce from "../assets/divorcecake.jpg"
import reception from "../assets/receptioncake.jpg"

import mango from "../assets/mangocake.jpg"
import appleblueberry from "../assets/appleblueberrycake.jpg"
import redberry from "../assets/redberrycake.jpg"
import coconut from "../assets/coconutcake.jpg"
import lemon from "../assets/lemoncheesecake.jpg"
import carrot from "../assets/carrotcake.jpg"
import banana from "../assets/bananacake.jpg"
import walnut from "../assets/walnutdatescake.jpg"
import watermelon from "../assets/watermeloncake.jpg"
import blueberry from "../assets/blueberrycake.jpg"
import raspberry from "../assets/RaspberryVanilla.jpg"
import pineapple from "../assets/pineappleecake.jpg"

import mawa from "../assets/MawaCake.jpg"
import rabdijalebi from "../assets/RabdijalebiCake.jpg"
import kajukatli from "../assets/KajuKatliCake.jpg"
import rasgulla from "../assets/RasgullaCake.jpg"
import rasmalai from "../assets/RasmalaiCake.jpg"
import gulabjamun from "../assets/GulabJamunCake.jpg"

const cakesData = [
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    rating: 4.8,
    img: truffle,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 2,
    name: "Oreo Chocolate Cake",
    rating: 4.6,
    img: oreocake,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 3,
    name: "Black Forest Cake",
    rating: 4.7,
    img: blackforest,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 4,
    name: "Chocolate Cheese Cake",
    rating: 4.5,
    img: chocolatecheese,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 5,
    name: "Cookie & Cream",
    rating: 4.9,
    img: cookiecream,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 6,
    name: "German Chocolate Cake",

    rating: 4.8,
    img: germancake,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 7,
    name: "Chocolate Mousse Cake",
    rating: 5.0,
    img: chocolatemousse,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 8,
    name: "Chocolate Dobege Cake",
    rating: 4.9,
    img: chocolatedobege,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 9,
    name: "Peanut Butter Cake",
    rating: 4.9,
    img: peanutbutter,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 10,
    name: "Blackout Cake",
    rating: 4.9,
    img: blackout,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 11,
    name: "Chocolate Cake",
    rating: 4.9,
    img: chocolatecake,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 12,
    name: "Kunafa Cake",
    rating: 4.9,
    img: kunafa,
    category: "Chocolate",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 13,
    name: "Strawberry Short Cake",
    rating: 4.8,
    img: strawshort,
    category: "Strawberry",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 14,
    name: "Rhubarb Strawberry Cake",
    rating: 4.7,
    img: rhubarbstraw,
    category: "Strawberry",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 15,
    name: "Strawberry Cheese Cake",
    rating: 4.5,
    img: strawcheese,
    category: "Strawberry",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 16,
    name: "Lemon Strawberry Cake",
    rating: 4.9,
    img: lemonstraw,
    category: "Strawberry",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 17,
    name: "Decade Chocolate Strawberry Cake",
    rating: 4.8,
    img: decadestraw,
    category: "Strawberry",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 18,
    name: "Strawberry Coconut Cake",
    rating: 5.0,
    img: strawcoconut,
    category: "Strawberry",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 19,
    name: "Strawberry Poke Cake",
    rating: 4.9,
    img: strawpoke,
    category: "Strawberry",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 20,
    name: "Strawberry Upside Down Cake",
    rating: 4.9,
    img: strawupside,
    category: "Strawberry",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 21,
    name: "Raspberry Vanilla Cake",
    rating: 4.8,
    img: rasberryvanilla,
    category: "Vanilla",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 22,
    name: "Vanilla Strawberry Cake",
    rating: 4.7,
    img: strawvanilla,
    category: "Vanilla",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 23,
    name: "Chocolate Vanilla Cake",
    rating: 4.5,
    img: chocovanilla,
    category: "Vanilla",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 24,
    name: "Berry Vanilla Cake",
    rating: 4.9,
    img: berryvanilla,
    category: "Vanilla",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 25,
    name: "White Chocolate Cake",
    rating: 4.8,
    img: whitechocovanilla,
    category: "Vanilla",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 26,
    name: "Rainbow Cake",
    rating: 4.8,
    img: rainbow,
    category: "Birthday",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 27,
    name: "Biscoff Cake",
    rating: 4.8,
    img: biscoff,
    category: "Birthday",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 28,
    name: "Cartoon Cake",
    rating: 4.8,
    img: cartoon,
    category: "Birthday",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 29,
    name: "Ocean Cake",
    rating: 4.8,
    img: ocean,
    category: "Birthday",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 30,
    name: "Chirstmas Cake",
    rating: 4.8,
    img: christmas,
    category: "Birthday",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 31,
    name: "Delight Cake",
    rating: 4.8,
    img: delight,
    category: "Birthday",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 32,
    name: "Photo theme Cake",
    rating: 4.8,
    img: photocake,
    category: "Birthday",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 33,
    name: "KitKat Cake",
    rating: 4.8,
    img: kitkat,
    category: "Birthday",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 34,
    name: "Engagement Cake",
    rating: 4.8,
    img: engagment,
    category: "Wedding",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 35,
    name: "Wedding Cake",
    rating: 4.8,
    img: wedding,
    category: "Wedding",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 36,
    name: "Anniversary Cake",
    rating: 4.8,
    img: anniversary,
    category: "Wedding",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 37,
    name: "Valentines Cake",
    rating: 4.8,
    img: valentine,
    category: "Wedding",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 38,
    name: "Reception Cake",
    rating: 4.8,
    img: reception,
    category: "Wedding",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 39,
    name: "Divorce Cake",
    rating: 4.8,
    img: divorce,
    category: "Wedding",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 40,
    name: "Mawa Cake",
    rating: 4.8,
    img: mawa,
    category: "Desi Cakes",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 41,
    name: "Rabdi Jalebi Cake",
    rating: 4.8,
    img: rabdijalebi,
    category: "Desi Cakes",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 42,
    name: "Kaju-Katli Cake",
    rating: 4.8,
    img: kajukatli,
    category: "Desi Cakes",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 43,
    name: "Rasgulla Cake",
    rating: 4.8,
    img: rasgulla,
    category: "Desi Cakes",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 44,
    name: "Rasmalai Cake",
    rating: 4.8,
    img: rasmalai,
    category: "Desi Cakes",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 45,
    name: "Gulab-Jamun Cake",
    rating: 4.8,
    img: gulabjamun,
    category: "Desi Cakes",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 46,
    name: "Apple-Blueberry Cake",
    rating: 4.8,
    img: appleblueberry,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 47,
    name: "RedBerry Cake",
    rating: 4.8,
    img: redberry,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 48,
    name: "Coconut Cake",
    rating: 4.8,
    img: coconut,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 49,
    name: "Pineapple Cake",
    rating: 4.8,
    img: pineapple,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 50,
    name: "Lemon Cheese Cake",
    rating: 4.8,
    img: lemon,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 51,
    name: "Carrot Cake",
    rating: 4.8,
    img: carrot,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 52,
    name: "Banana Cake",
    rating: 4.8,
    img: banana,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 53,
    name: "Walnut-Dates Cake",
    rating: 4.8,
    img: walnut,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 54,
    name: "Watermelon Cake",
    rating: 4.8,
    img: watermelon,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 55,
    name: "Mango Cake",
    rating: 4.8,
    img: mango,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 56,
    name: "Blueberry Cake",
    rating: 4.8,
    img: blueberry,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  },
  {
    id: 57,
    name: "Raspberry Cake",
    rating: 4.8,
    img: raspberry,
    category: "Fruit",
    weights: [
      { size: "250g", price: 199 },
      { size: "500g", price: 399 },
      { size: "1kg", price: 699 },
      { size: "2kg", price: 1299 }
    ]
  }
];
export default function OurCakes() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [search, setSearch] = useState("");
  const [selectedWeights, setSelectedWeights] = useState({});
  const [dbCakes, setDbCakes] = useState([]);

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "auto";
  }, [cartOpen]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cakes")
      .then((res) => {
        console.log("Backend Cakes:", res.data);
        console.log("First Cake", res.data[0]);
        setDbCakes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems([...cart]);
  };

  const handleAdd = async (cake) => {

    let cart = [...cartItems];
    const weightList = cake.weight || cake.weights || [];

    const selectedWeight =
      weightList.find(
        w => w.size === (selectedWeights[cake.id] || "250g")
      ) || weightList[0];

    const item = cart.find(
      i =>
        i.id === cake.id &&
        i.selectedSize === selectedWeight.size
    );



    if (item) {

      item.qty += 1;

    } else {

      const weightList = cake.weight || cake.weights || [];

      const selectedWeight =
        weightList.find(
          w => w.size === (selectedWeights[cake.id] || "250g")
        ) || weightList[0];

      cart.push({
        ...cake,
        selectedSize: selectedWeight.size,
        price: selectedWeight.price,
        qty: 1
      });

      try {

        await axios.post(
          "http://localhost:5000/api/cart/add",
          {
            productId: cake.id,
            name: cake.name,
            price: selectedWeight.price,
            weight: selectedWeight.size,
            image: cake.image || cake.img,
            qty: 1
          }
        );

      } catch (err) {

        console.log("Cart Error:", err);

      }
    }
    console.log(cart);

    updateCart(cart);
  };


  const handleMinus = (cake) => {
    let cart = [...cartItems];

    const weightList = cake.weight || cake.weights || [];

    const selectedWeight =
      weightList.find(
        w => w.size === (selectedWeights[cake.id] || "250g")
      ) || weightList[0];

    const item = cart.find(
      i =>
        i.id === cake.id &&
        i.selectedSize === selectedWeight.size
    );

    if (!item) return;

    if (item.qty === 1) {
      cart = cart.filter(i => i.id !== cake.id);
    } else {
      item.qty -= 1;
    }

    updateCart(cart);
  };

  const getQty = (id) => {
    return cartItems
      .filter(i => i.id === id)
      .reduce((total, item) => total + item.qty, 0);
  };

  const allCakes =
    dbCakes.length > 0 ? dbCakes : cakesData;

  const filtered = allCakes.filter(cake => {

    const categoryMatch = category
      ? cake.category === category
      : true;

    const searchMatch = cake.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <div className="cakes-page">

        {/* TOP BAR */}
        <div className="caketop-bar">

          <Link to="/">
            <button className="cakehome-btn">Home</button>
          </Link>

          <div
            className="cart-icondustbin"
            onClick={() => setCartOpen(true)}
          >
            <BsCart3 size={28} />

            {cartItems.length > 0 && (
              <span className="cart-badge">
                {cartItems.reduce((t, i) => t + i.qty, 0)}
              </span>
            )}
          </div>

        </div>

        {/* HEADER */}
        <div className="cakes-header">
          <h1 className="cakes-title">
            Our Cakes <GiCakeSlice className="heading-cake-icon" />
          </h1>
          <p>Fresh baked happiness</p>
        </div>

        {/* FILTER + SEARCH */}
        <div className="cake-filter-bar">

          <div className="cake-categories">

            <Link to="/cakes">
              <button className={!category ? "active" : ""}>
                All
              </button>
            </Link>

            <Link to="/cakes/Chocolate">
              <button className={category === "Chocolate" ? "active" : ""}>
                Chocolate
              </button>
            </Link>

            <Link to="/cakes/Strawberry">
              <button className={category === "Strawberry" ? "active" : ""}>
                Strawberry
              </button>
            </Link>

            <Link to="/cakes/Vanilla">
              <button className={category === "Vanilla" ? "active" : ""}>
                Vanilla
              </button>
            </Link>

            <Link to="/cakes/Fruit">
              <button className={category === "Fruit" ? "active" : ""}>
                Fruit
              </button>
            </Link>

            <Link to="/cakes/Desi Cakes">
              <button className={category === "Desi Cakes" ? "active" : ""}>
                Desi Cakes
              </button>
            </Link>

            <Link to="/cakes/Birthday">
              <button className={category === "Birthday" ? "active" : ""}>
                Birthday
              </button>
            </Link>

            <Link to="/cakes/Wedding">
              <button className={category === "Wedding" ? "active" : ""}>
                Wedding
              </button>
            </Link>

          </div>

          <div className="cake-search-box">

            <input
              type="text"
              placeholder="Search cakes..."
              className="cake-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>

        {/* CAKES GRID */}
        <div className="cakes-grid">

          {filtered.map((cake) => {

            const weightList = cake.weight || cake.weights || [];

            const selectedWeight =
              weightList.find(
                w => w.size === (selectedWeights[cake.id] || "250g")
              ) || weightList[0];

            return (


              <div className="cake-card" key={cake.id}>

                <img src={cake.image || cake.img} alt={cake.name} />
                <div className="cake-cart-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCartOpen(true);
                  }}>
                  <BsCart3 />
                </div>

                {/* Quantity Badge */}
                {getQty(cake.id) > 0 && (
                  <span className="cake-cart-badge">
                    {getQty(cake.id)}
                  </span>
                )}


                <div className="cake-info">

                  <h3>{cake.name}</h3>
                  <select className="cake-weight-dropdown"
                    value={selectedWeights[cake.id] || "250g"}
                    onChange={(e) =>
                      setSelectedWeights({
                        ...selectedWeights,
                        [cake.id]: e.target.value
                      })
                    }
                  >
                    {(cake.weight || cake.weights || []).map((w) => (
                      <option key={w.size} value={w.size}>
                        {w.size} - ₹{w.price}
                      </option>
                    ))}
                  </select>

                  <div className="cake-meta">
                    <span>₹{selectedWeight?.price}</span>
                    <span>⭐ {cake.rating}</span>
                  </div>

                  <div
                    className="cakecart-controls"
                    onClick={(e) => e.stopPropagation()}
                  >

                    {getQty(cake.id) > 0 ? (

                      <div className="cakeqty-box">

                        <button onClick={() => handleMinus(cake)}>
                          -
                        </button>

                        <span>{getQty(cake.id)}</span>

                        <button onClick={() => handleAdd(cake)}>
                          +
                        </button>

                      </div>

                    ) : (

                      <button onClick={() => handleAdd(cake)}>
                        Add to Cart
                      </button>

                    )}

                  </div>

                </div>

              </div>
            );

          })}

        </div>

        {/* CART DRAWER */}
        {cartOpen && (

          <div
            className="cakecart-overlay"
            onClick={() => setCartOpen(false)}
          >

            <div
              className="cakecart-drawer"
              onClick={(e) => e.stopPropagation()}
            >

              <h2>Your Basket 🧺</h2>

              {cartItems.length === 0 ? (

                <p>Empty Cart</p>

              ) : (

                cartItems.map((item) => (

                  <div className="cakecart-item" key={`${item.id}-${item.selectedSize}`}>

                    <img src={item.image || item.img} alt={item.name} />

                    <div className="cakecart-details">

                      <h4>{item.name}</h4>
                      <p>Weight: {item.selectedSize}</p>

                      <p>
                        {item.selectedSize} | Qty: {item.qty} | ₹{item.price}
                      </p>

                      <div className="cakecart-actions">

                        <button
                          onClick={() =>
                            navigate(`/product/${item.id}`)
                          }
                        >
                          View Product
                        </button>

                        <button
                          className="remove-btn"
                          onClick={() => {

                            const updated =
                              cartItems.filter(
                                (i) => i.id !== item.id
                              );

                            updateCart(updated);

                          }}
                        >
                          <FaTrash />
                        </button>

                      </div>

                    </div>

                  </div>

                ))

              )}

              {/* FOOTER */}
              {cartItems.length > 0 && (

                <div className="cakecart-footer">

                  <h3>
                    Total : ₹
                    {cartItems.reduce((t, i) => t + i.price * i.qty, 0)}
                  </h3>


                  <button className="cakecheckout-btn" onClick={() => navigate("/checkout")}>
                    Proceed To Checkout
                  </button>

                </div>

              )}

            </div>

          </div>

        )}

      </div>

      {/* FOOTER */}
      <footer className="cake-footer">

        <div className="cakefooter-container">

          {/* LEFT */}
          <div className="cakefooter-box">

            <div className="cakelogofooter">

              <GiCakeSlice className="cakelogo-icon" />

              <span>SugarCandy</span>

            </div>

            <p>
              Freshly baked cakes made with love and premium
              ingredients. Making every celebration sweeter
              since 2018.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div className="cakefooter-box">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/cakes">Our Cakes</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/custom">Custom Cake</Link>

          </div>

          {/* CONTACT */}
          <div className="cakefooter-box">

            <h3>Contact Us</h3>

            <p>
              <FaPhoneAlt />
              +91 9876543210
            </p>

            <p>
              <FaEnvelope />
              cakehouse@gmail.com
            </p>

            <p>
              <FaMapMarkerAlt />
              Nagpur, Maharashtra
            </p>

          </div>

          {/* SOCIAL */}
          <div className="cakefooter-box">

            <h3>Follow Us</h3>

            <div className="cakesocial-icons">

              <a href="https://instagram.com">
                <FaInstagram />
              </a>

              <a href="https://facebook.com">
                <FaFacebookF />
              </a>

              <a href="https://twitter.com">
                <FaTwitter />
              </a>

            </div>

          </div>

        </div>

        <div className="cakefooter-bottom">
          © 2026 Cake House | All Rights Reserved
        </div>

      </footer>

    </>
  );

}