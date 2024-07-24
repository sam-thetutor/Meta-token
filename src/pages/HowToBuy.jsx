import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa6";
import OImg from "../assets/openchat.png";

const HowToBuy = () => {
  return (
    <div
      id="buy"
      className="flex text-white flex-col w-screen h-full p-8 justify-center items-center bg-gradient-to-r from-[#4F3203] to-[#211500]"
    >
      <h2 className="uppercase text-5xl md:text-7xl text-center font-bold">
        Join the
      </h2>
      <h2 className="uppercase text-5xl md:text-7xl text-center font-bold">
        Revolution Now
      </h2>
      <button className="border text-3xl rounded-full mt-4 p-2 hover:bg-orange-500">
        <a
          href="https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=k762w-hiaaa-aaaai-qpfpq-cai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy OWL
        </a>
      </button>
      <span className="text-center mt-6">
        Follow us on our social media handles
      </span>

      <ul className="flex justify-center items-center gap-6 mt-2">
        <li>
          <a
            href="https://x.com/Meta_Owl_Token"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} color="white" />
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/JMcJCwdz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord size={30} color="white" />
          </a>
        </li>
        <li>
          <a
            href="https://oc.app/community/zjreo-6yaaa-aaaaf-bmyoq-cai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={OImg} alt="Open Chat" className="h-8 w-8" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HowToBuy;
