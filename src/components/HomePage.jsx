import React from "react";

import Navbar from "./Navbar";
import Feed from "./Feed";
import NFTList from "./NFTList";
import Carousel from "./Carousel";
import Card from "./Card";
import Footer from "./Footer/Footer";
import art from "../img/maverick-art.png"
import gaming from "../img/maverick-gaming.png"
import membership from "../img/maverick-membership.png"
import pfp from "../img/maverick-pfps.png"
import photography from "../img/maverick-photography.png"


const HomePage = () => {
  return (
    <>
      <Navbar />
      <Feed />
      <NFTList />
      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          fontSize: "30px",
          marginLeft: "30px",
          marginTop: "30px",
        }}
      >
        Notable Collections
      </div>
      <div>
      <Carousel />
      </div>
      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          fontSize: "30px",
          marginLeft: "30px",
          marginTop: "30px",
        }}
      >
        NFT 101
      </div>
      <Card />
      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          fontSize: "30px",
          marginLeft: "30px",
          marginTop: "30px",
        }}
      >
        Explore Categories
      </div>
      <Card
        title1="Art"
        icon1={art}
        title2="Gaming"
        icon2={gaming}
        title3="Memberships"
        icon3={membership}
        title4="PFPs"
        icon4={pfp}
        title5="Photography"
        icon5={photography}
      />
      <div
        style={{
          paddingTop: "35px",
          backgroundColor: "rgb(24, 104, 183)",
          paddingLeft: "32px",
          paddingRight:"32px",
          fontSize: "20px",
          fontWeight: "500",
          color: "rgb(255, 255, 255)",
        }}
      >
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
