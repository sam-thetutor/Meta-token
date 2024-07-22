import React from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa6';
import OImg from "../assets/openchat.png";

const HowToBuy = () => {
  return (
    <div id='buy' className='flex text-white flex-col w-screen h-full p-8 justify-center items-center bg-gradient-to-r from-[#4F3203] to-[#211500]'>
      
      <h2 className='uppercase text-5xl md:text-7xl text-center font-bold'>Join the</h2>
      <h2 className='uppercase text-5xl md:text-7xl text-center font-bold'>Revolution Now</h2>
      <button className='border p-3 mt-6 hover:bg-orange-700 cursor-pointer'>Buy OWL</button>
      <span className='text-center mt-2'>Follow us on our social media handles</span>

      <ul className='flex justify-center items-center gap-6 mt-4'>
        <li>
          <FaTwitter size={30} color='white' />
        </li>
        <li>
          <FaDiscord size={30} color='white' />
        </li>
        <li>
          <img src={OImg} alt="Open Chat" className='h-8 w-8' />
        </li>
      </ul>
    </div>
  );
}

export default HowToBuy;
