import React, { useState } from "react";
import SearchFeed from "./SearchFeed";
import logo from "../img/opensea.svg";
import Categories from "./Categories";

const Navbar = () => {
  const [onScroll, setOnScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div
        className="h-15"
        style={{
          padding: "10px 35px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          position: "fixed !important",
          top: "0",
          left:"0",
          zIndex:"1000",
          boxShadow: onScroll ? "rgb(0 0 0 / 8%) 0px 1px 0px" : "none",
          border: "none",
          borderRadius: "0px",
          background: onScroll
            ? "rgb(255, 255, 255)"
            : "linear-gradient(90deg, rgba(235,235,235,1) 0%, rgba(175,233,242,1) 27%, rgba(231,199,229,1) 98%)",
        }}
      >
        <img src={logo} alt="logo" style={{ width: "40px" }} />
        <div className="flex p-2 text-2xl font-bold">OpenSea</div>
        <SearchFeed />
        <Categories />
      </div>
    </>
  );
};

export default Navbar;
