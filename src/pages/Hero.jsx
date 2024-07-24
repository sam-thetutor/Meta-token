import React from "react";
import MetaIMage from "../assets/owl-logo.png";
const Hero = () => {
  return (
    <div
      className="hero-image flex justify-evenly items-center h-full"
      id="hero"
    >
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 w-full">
        <div className="mt-6 md:p-4 md:h-[600px] hidden md:flex flex-col justify-start text-white text-center">
          <h3>Fun fact about owls</h3>

          <p className="text-lg">
            Owls are found on every continent except Antarctica and are known
            for their ability to turn their heads almost all the way around.
          </p>
        </div>
        <div className="flex animate-pulse cursor-pointer flex-col text-orange-500  items-center justify-center p-4">
          <a
            href="https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=k762w-hiaaa-aaaai-qpfpq-cai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex w-full items-center justify-center text-2xl">
              Buy
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-5xl md:text-[90px] text-white">
              $OWL
            </div>
          </a>
        </div>
        <div className="p-4 md:h-[600px] text-white hidden md:flex  text-lg flex-col justify-end text-center">
          <h3>Fun fact about owls</h3>

          <p>
            Owls have soft, fluffy feathers that allow them to fly silently and
            have excellent hunting skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
