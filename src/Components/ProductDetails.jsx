import React from "react";
import './ProductDetails.css'
import {
  FaArrowLeft,
  FaStar,
  FaShippingFast,
  FaBirthdayCake,
  FaHeart
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";
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
    price: "₹499",
    rating: 4.8,
    img: truffle,
    category: "Chocolate",
    description: "Rich chocolate cake layered with smooth truffle cream."
  },
  {
    id: 2,
    name: "Oreo Chocolate Cake",
    price: "₹550",
    rating: 4.6,
    img: oreocake,
    category: "Chocolate",
     description: "Chocolate cake loaded with crunchy Oreo cookies."
  },
  {
    id: 3,
    name: "Black Forest Cake",
    price: "₹520",
    rating: 4.7,
    img: blackforest,
    category: "Chocolate",
    description: "Classic cake with cherries, cream & chocolate layers."
  },
  {
    id: 4,
    name: "Chocolate Cheese Cake",
    price: "₹450",
    rating: 4.5,
    img: chocolatecheese,
    category: "Chocolate",
    description: "Creamy cheesecake blended with rich chocolate flavor."
  },
  {
    id: 5,
    name: "Cookie & Cream",
    price: "₹699",
    rating: 4.9,
    img: cookiecream,
    category: "Chocolate",
    description: "Delicious cake filled with cookie crunch & cream."
  },
  {
    id: 6,
    name: "German Chocolate Cake",
    price: "₹750",
    rating: 4.8,
    img: germancake,
    category: "Chocolate",
    description: "Chocolate cake with coconut & caramel filling."
  },
  {
    id: 7,
    name: "Chocolate Mousse Cake",
    price: "₹999",
    rating: 5.0,
    img: chocolatemousse,
    category: "Chocolate",
    description: "Soft & airy chocolate mousse layered cake."
  },
  {
    id: 8,
    name: "Chocolate Dobege Cake",
    price: "₹899",
    rating: 4.9,
    img: chocolatedobege,
    category: "Chocolate",
    description: "Layered chocolate cake with rich buttercream filling."
  },
  {
    id: 9,
    name: "Peanut Butter Cake",
    price: "₹899",
    rating: 4.9,
    img: peanutbutter,
    category: "Chocolate",
    description: "Perfect mix of chocolate and peanut butter flavors."
  },
  {
    id: 10,
    name: "Blackout Cake",
    price: "₹899",
    rating: 4.9,
    img: blackout,
    category: "Chocolate",
    description: "Intense dark chocolate cake for true chocolate lovers."
  },
  {
    id: 11,
    name: "Chocolate Cake",
    price: "₹899",
    rating: 4.9,
    img: chocolatecake,
    category: "Chocolate",
    description: "Classic moist chocolate cake loved by everyone."
  },
  {
    id: 12,
    name: "Kunafa Cake",
    price: "₹899",
    rating: 4.9,
    img: kunafa,
    category: "Chocolate",
    description: "Fusion cake with crispy kunafa and creamy layers."
  },
  {
    id: 13,
    name: "Strawberry Short Cake",
    price: "₹499",
    rating: 4.8,
    img: strawshort,
    category: "Strawberry",
    description: "Light sponge cake with fresh strawberries & cream."
  },
  {
    id: 14,
    name: "Rhubarb Strawberry Cake",
    price: "₹520",
    rating: 4.7,
    img: rhubarbstraw,
    category: "Strawberry",
    description: "Tangy rhubarb paired with sweet strawberry flavor."
  },
  {
    id: 15,
    name: "Strawberry Cheese Cake",
    price: "₹450",
    rating: 4.5,
    img: strawcheese,
    category: "Strawberry",
    description: "Creamy cheesecake topped with fresh strawberries."
  },
  {
    id: 16,
    name: "Lemon Strawberry Cake",
    price: "₹699",
    rating: 4.9,
    img: lemonstraw,
    category: "Strawberry",
    description: "Refreshing lemon flavor with sweet strawberry layers."
  },
  {
    id: 17,
    name: "Decade Chocolate Strawberry Cake",
    price: "₹750",
    rating: 4.8,
    img: decadestraw,
    category: "Strawberry",
    description: "Perfect combo of chocolate richness & strawberry sweetness."
  },
  {
    id: 18,
    name: "Strawberry Coconut Cake",
    price: "₹999",
    rating: 5.0,
    img: strawcoconut,
    category: "Strawberry",
    description: "Tropical blend of coconut and strawberry delight."
  },
  {
    id: 19,
    name: "Strawberry Poke Cake",
    price: "₹899",
    rating: 4.9,
    img: strawpoke,
    category: "Strawberry",
    description: "Soft cake soaked with strawberry flavored syrup."
  },
  {
    id: 20,
    name: "Strawberry Upside Down Cake",
    price: "₹899",
    rating: 4.9,
    img: strawupside,
    category: "Strawberry",
    description: "Caramelized strawberry topping with soft base."
  },
  {
    id: 21,
    name: "Raspberry Vanilla Cake",
    price: "₹499",
    rating: 4.8,
    img: rasberryvanilla,
    category: "Vanilla",
    description: "Sweet vanilla cake with tangy raspberry layers."
  },
  {
    id: 22,
    name: "Vanilla Strawberry Cake",
    price: "₹520",
    rating: 4.7,
    img: strawvanilla,
    category: "Vanilla",
    description: "Soft vanilla cake with strawberry cream filling."
  },
  {
    id: 23,
    name: "Chocolate Vanilla Cake",
    price: "₹450",
    rating: 4.5,
    img: chocovanilla,
    category: "Vanilla",
    description: "Perfect balance of chocolate and vanilla layers."
  },
  {
    id: 24,
    name: "Berry Vanilla Cake",
    price: "₹699",
    rating: 4.9,
    img: berryvanilla,
    category: "Vanilla",
    description: "Vanilla cake topped with mixed berry flavors."
  },
  {
    id: 25,
    name: "White Chocolate Cake",
    price: "₹750",
    rating: 4.8,
    img: whitechocovanilla,
    category: "Vanilla",
    description: "Smooth and creamy white chocolate cake."
  },
  {
    id: 26,
    name: "Rainbow Cake",
    price: "₹750",
    rating: 4.8,
    img:  rainbow,
    category: "Birthday",
    description: "Colorful layered cake perfect for celebrations." 
  },
  {
    id: 27,
    name: "Biscoff Cake",
    price: "₹750",
    rating: 4.8,
    img: biscoff,
    category: "Birthday",
    description: "Rich caramelized biscuit flavored cake."
  },
  {
    id: 28,
    name: "Cartoon Cake",
    price: "₹750",
    rating: 4.8,
    img: cartoon,
    category: "Birthday",
    description: "Fun themed cake loved by kids." 
  },
  {
    id: 29,
    name: "OceanCake",
    price: "₹750",
    rating: 4.8,
    img: ocean,
    category: "Birthday",
    description: "Beautiful ocean theme cake design." 
  },
  {
    id: 30,
    name: "Chirstmas Cake",
    price: "₹750",
    rating: 4.8,
    img: christmas,
    category: "Birthday",
    description: "Festive cake filled with holiday flavors." 
  },
  {
    id: 31,
    name: "Delight Cake",
    price: "₹750",
    rating: 4.8,
    img: delight,
    category: "Birthday",
    description: "A delightful mix of flavors for every occasion." 
  },
  {
    id: 32,
    name: "Photo theme Cake",
    price: "₹750",
    rating: 4.8,
    img: photocake,
    category: "Birthday",
    description: "Customized cake with your favorite photo."
  },
  {
    id: 33,
    name: "KitKat Cake",
    price: "₹750",
    rating: 4.8,
    img:kitkat,
    category: "Birthday",
    description: "Chocolate cake covered with KitKat & gems." 
  },
  {
    id: 34,
    name: "Engagement Cake",
    price: "₹750",
    rating: 4.8,
    img:engagment,
    category: "Wedding",
    description: "Elegant cake for engagement celebrations."
  },
  {
    id: 35,
    name: "Wedding Cake",
    price: "₹750",
    rating: 4.8,
    img:wedding,
    category: "Wedding",
    description: "Premium multi-layered cake for weddings."
  },
  {
    id: 36,
    name: "Anniversary Cake",
    price: "₹750",
    rating: 4.8,
    img:anniversary,
    category: "Wedding",
    description: "Celebrate love with a special cake." 
  },
  {
    id: 37,
    name: "Valentines Cake",
    price: "₹750",
    rating: 4.8,
    img:valentine,
    category: "Wedding",
    description: "Romantic cake perfect for Valentine's Day." 
  },
  {
    id: 38,
    name: " Cake",
    price: "₹750",
    rating: 4.8,
    img:engagment,
    category: "Wedding",
    description: "Custom cake for every special moment."
  },
  {
    id: 39,
    name: "Reception Cake",
    price: "₹750",
    rating: 4.8,
    img:reception,
    category: "Wedding",
    description: "Beautiful cake for grand receptions."
  },
  {
   id: 40,
    name: "Divorce Cake",
    price: "₹750",
    rating: 4.8,
    img:divorce,
    category: "Wedding",
    description: "Fun cake to celebrate new beginnings 😄"
  },
  {
    id: 41,
    name: "Mawa Cake",
    price: "₹750",
    rating: 4.8,
    img:mawa,
    category: "Desi Cakes"  
  },
  {
    id: 42,
    name: "Rabdi Jalebi Cake",
    price: "₹750",
    rating: 4.8,
    img:rabdijalebi,
    category: "Desi Cakes"  
  },
  {
    id: 43,
    name: "Kaju-Katli Cake",
    price: "₹750",
    rating: 4.8,
    img:kajukatli,
    category: "Desi Cakes"  
  },
  {
    id: 44,
    name: "Rasgulla Cake",
    price: "₹750",
    rating: 4.8,
    img:rasgulla,
    category: "Desi Cakes"  
  },
  {
    id: 45,
    name: "Rasmalai Cake",
    price: "₹750",
    rating: 4.8,
    img:rasmalai,
    category: "Desi Cakes"  
  },
  {
    id: 46,
    name: "Gulab-Jamun Cake",
    price: "₹750",
    rating: 4.8,
    img:gulabjamun,
    category: "Desi Cakes"  
  },
  {
    id: 47,
    name: "Apple-Blueberry Cake",
    price: "₹750",
    rating: 4.8,
    img:appleblueberry,
    category: "Fruit"  
  },
  {
    id: 48,
    name: "RedBerry Cake",
    price: "₹750",
    rating: 4.8,
    img:redberry,
    category: "Fruit"  
  },
  {
    id: 49,
    name: "Coconut Cake",
    price: "₹750",
    rating: 4.8,
    img:coconut,
    category: "Fruit"  
  },
  {
    id: 50,
    name: "Pineapple Cake",
    price: "₹750",
    rating: 4.8,
    img:pineapple,
    category: "Fruit"  
  },
  {
    id: 51,
    name: "Lemon Cheese Cake",
    price: "₹750",
    rating: 4.8,
    img:lemon,
    category: "Fruit"  
  },
  {
    id: 52,
    name: "Carrot Cake",
    price: "₹750",
    rating: 4.8,
    img:carrot,
    category: "Fruit"  
  },
  {
    id: 53,
    name: "Banana Cake",
    price: "₹750",
    rating: 4.8,
    img:banana,
    category: "Fruit"  
  },
  {
    id: 54,
    name: "Walnut-Dates Cake",
    price: "₹750",
    rating: 4.8,
    img:walnut,
    category: "Fruit"  
  },
  {
    id: 55,
    name: "Watermelon Cake",
    price: "₹750",
    rating: 4.8,
    img:watermelon,
    category: "Fruit"  
  },
  {
    id: 56,
    name: "Mango Cake",
    price: "₹750",
    rating: 4.8,
    img:mango,
    category: "Fruit"  
  },
  {
    id: 57,
    name: "Blueberry Cake",
    price: "₹750",
    rating: 4.8,
    img:blueberry,
    category: "Fruit"  
  },
  {
    id: 58,
    name: "Raspberry Cake",
    price: "₹750",
    rating: 4.8,
    img:raspberry,
    category: "Fruit"  
  }
];

export default function ProductDetails(){

  const { id } = useParams();

  const navigate = useNavigate();

  const cake = cakesData.find(
    (item) => item.id === Number(id)
  );

  if(!cake){
    return (
      <h2 style={{textAlign:"center"}}>
        Cake not found 😢
      </h2>
    );
  }

  /* ADD TO CART */

  const handleAddToCart = () => {

    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const priceNumber =
      Number(cake.price.replace("₹",""));

    const existingItem =
      cart.find((item)=> item.id === cake.id);

    if(existingItem){

      existingItem.qty += 1;

    } else {

      cart.push({
        ...cake,
        price: priceNumber,
        qty:1
      });

    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Added to Cart 🛒");
  };

  /* BUY NOW */

  const handleBuyNow = () => {

    localStorage.setItem(
      "cart",
      JSON.stringify([
        {
          ...cake,
          price:Number(
            cake.price.replace("₹","")
          ),
          qty:1
        }
      ])
    );

    navigate("/cart");
  };

  return(
    <>
    <div className="product-page">

      {/* TOP BAR */}

      <div className="product-topbar">

        <button
          className="productback-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
          Back
        </button>

      </div>

      {/* MAIN */}

      <div className="product-container">

        {/* IMAGE */}

        <div className="product-img">

          <img
            src={cake.img}
            alt={cake.name}
          />

        </div>

        {/* INFO */}

        <div className="product-info">

          <span className="product-category">
            {cake.category}
          </span>

          <h1>{cake.name}</h1>

          <div className="product-rating">
            <FaStar />
            {cake.rating} Rating
          </div>

          <h2 className="product-price">
            {cake.price}
          </h2>

          <p className="product-desc">
            {cake.description}
          </p>

          {/* FEATURES */}

          <div className="product-features">

            <div className="productfeature-box">
              <FaShippingFast />
              Same Day Delivery
            </div>

            <div className="productfeature-box">
              <FaBirthdayCake />
              Freshly Baked
            </div>

            <div className="productfeature-box">
              <FaHeart />
              Premium Quality
            </div>

          </div>

          {/* BUTTONS */}

          <div className="productbtn-group">

            <button
              className="productcart-btn"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>

            <button
              className="productbuy-btn"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
    </>
  );
}