import React from "react";

const Footter = () => {
  return (
    <div className="w-screen py-3 px-1 bg-gradient-to-r from-[#211500] to-[#211500] text-white">
      <div className="max-w-[1240px] flex flex-col m-auto">
        <ul className="flex justify-center gap-2">
          <li className="hover:text-orange-500">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#tokenomics">Tokenomics</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#buy">Buy</a>
          </li>
        </ul>
        <div className="flex justify-center md:justify-end text-center md:text-end hover:text-green-600 mt-6 w-full">
          
            
            <a
              href="https://twitter.com/samthetutor2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Designed by Sam-the-tutor ❤️
            </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footter;
