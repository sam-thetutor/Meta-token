import React from "react";
import MetaImage from "../assets/meta-2.png";

const About = () => {
  return (
    <div
      className="w-screen p-4 flex flex-col md:flex-row items-center text-white h-full bg-gradient-to-r from-[#4F3203] to-[#211500]"
      id="about"
    >
      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={MetaImage}
          alt="Meta Owl"
          className="h-[250px] md:h-[350px] rounded-full w-[250px] md:w-[350px]"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start">
        <div className="p-4 md:p-36 flex flex-col items-center md:items-start gap-2">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-start">
            About Meta Owl
          </h2>
          <p className="text-start">
            Meta Owl Token stands out as the first Creator token on the ICP
            Blockchain. Our commitment to innovation and our community-driven
            approach sets us apart from other projects. We focus on steady,
            sustainable growth, ensuring that every step we take benefits our
            community. Community is at the heart of Meta Owl Token. We believe
            in the power of collaboration and actively seek partnerships with
            other projects and artists to enhance our ecosystem. 
            </p>
            <p>
            Our community
            members are encouraged to get involved, contribute ideas, and
            participate in the growth of Meta Owl Token. We invite you to join
            us on this exciting journey. Whether you are a creator, an
            enthusiast, or someone who believes in the potential of blockchain
            technology, there is a place for you in the Meta Owl Token
            community. Together, we can achieve great things and push the
            boundaries
          </p>
          {/* <button className="border p-3 rounded-3xl mt-4">Explore More</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
