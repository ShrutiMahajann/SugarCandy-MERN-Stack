import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";
import CakeNavbar from "./Components/CakeNavbar";
import OurCakes from "./Components/OurCakes";
import ProductDetails from "./Components/ProductDetails";
import CartCake from "./Components/CartCake";
import CakeCheckout from "./Components/CakeCheckout";
import CakeOrderSuccess from "./Components/CakeOrderSuccess";
import CustomCake from "./Components/CustomCake";
import OrderStatus from "./Components/OrderStatus";
import HelpPage from "./Components/HelpPage";
import CakeRegister from "./Components/CakeRegister";
import CakeLogin from "./Components/CakeLogin";
import CustomSuccess from "./Components/CustomSuccess";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>    
      <Route path="/" element={<CakeNavbar />} />
      <Route path="/register" element={<CakeRegister/>}/>
      <Route path="/login" element={<CakeLogin/>}></Route>
      <Route path="/cakes" element={<OurCakes />} />
      <Route path="/cakes/:category" element={<OurCakes/>}></Route>
      <Route path="/product/:id" element={<ProductDetails/>}></Route>
      <Route path="/cart" element={<CartCake/>}></Route>
      <Route path="/checkout" element={<CakeCheckout/>}></Route>
      <Route path="/order" element={<CakeOrderSuccess/>}></Route>
      <Route path="/custom" element={<CustomCake/>}>'</Route>
      <Route path="/order-status" element={<OrderStatus/>}></Route>
      <Route path="/help" element={<HelpPage/>}></Route>
      <Route path="/customsuccess" element={<CustomSuccess/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
