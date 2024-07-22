import React from "react";
import MetaIMage from "../assets/owl-logo.png";
const Hero = () => {
  return (
    <div
      className="hero-image flex justify-evenly items-center h-full"
      id="hero"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className=" p-4 md:h-[600px] flex flex-col justify-end text-white text-end"></div>
        <div className="flex flex-col items-center justify-center p-4 text-6xl md:text-[120px] text-white">$OWL</div>
        <div className="p-4 md:h-[600px] flex flex-col justify-end text-white text-end">$OWL token is the first token on the Internet Computer with cool vibes</div>
      </div>
    </div>
  );
};

export default Hero;
