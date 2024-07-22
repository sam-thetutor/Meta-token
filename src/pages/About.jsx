import React from 'react';
import MetaImage from "../assets/meta-2.png";

const About = () => {
  return (
    <div
      className="w-screen p-4 flex flex-col md:flex-row items-center text-white h-full bg-gradient-to-r from-[#4F3203] to-[#211500]"
      id="about"
    >
      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
        <img src={MetaImage} alt="Meta Owl" className="h-[300px] md:h-[500px] rounded-full w-[300px] md:w-[500px]" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start">
        <div className="p-4 md:p-36 flex flex-col items-center md:items-start gap-2">
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-center md:text-left">About Meta Owl</h2>
          <span className="line mb-2"></span>
          <p className="text-center md:text-left">
            Meta Owl Token will stay relevant through partnerships created and
            fostered by Meta Owl and the Meta Owl Community. We are yet to make
            a dapp but it is not out of the question. We will add function as
            ICP grows and the functions arise.
          </p>
          <button className="border p-3 rounded-3xl mt-4">Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
