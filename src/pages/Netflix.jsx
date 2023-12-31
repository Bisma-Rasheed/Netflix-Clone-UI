import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Netflix = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <div>
        <Navbar isScrolled={isScrolled} />
      </div>
    </>
  );
};

export default Netflix;
