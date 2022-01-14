import React from "react";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Products from "./Products";
import Slider from "./Slider";
import Header from "./Header";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Header/>
      <Slider/>
      
      {/* <Slider /> */}
      {/* <Categories /> */}
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
