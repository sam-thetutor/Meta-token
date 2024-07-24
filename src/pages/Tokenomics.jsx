import React from "react";
import MetaImage from "../assets/bb2.png";

const Tokenomics = () => {
  return (
    <div
      className="w-full p-8 md:px-36 flex flex-col md:flex-row items-center text-white h-full bg-gradient-to-r from-[#4F3203] to-[#211500]"
      id="tokenomics"
    >
      {/* Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center mb-8 md:mb-0">
        <div className="p-4 md:p-14 flex flex-col items-center md:items-start gap-2">
          <h2 className="text-4xl md:text-4xl font-extrabold">TOKENOMICS</h2>
          <ul className="flex flex-col mt-4 gap-3">
            <li className="border border-yellow-600 rounded-2xl px-2 py-1"> Limited Supply : 1000</li>
            <li className="border border-yellow-600 rounded-2xl px-2 py-1">No Private sales</li>
            <li className="border border-yellow-600 rounded-2xl px-2 py-1">Deflationary</li>
            <li className="border border-yellow-600 rounded-2xl px-2 py-1">Exclusive</li>
            <li className="border border-yellow-600 rounded-2xl px-2 py-1">To the moon</li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img src={MetaImage} alt="Tokenomics" className="h-64 md:h-96 w-64 md:w-96" />
      </div>
    </div>
  );
};

export default Tokenomics;
