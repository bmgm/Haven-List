import React from "react";
import Image from "next/image";
import heroImage from "@/public/images/heroImage.png";
import SelectPropertyInput from "@/components/SelectPropertyInput";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-56px)] max-h-[800px] sm:flex-row gap-4 container mx-auto">
        {/* Hero text */}
        <div className="px-4 text-center md:w-1/2 md:h-full sm:text-left">
          <div className="flex flex-col gap-4 justify-around sm:mt-40 ">
            <h1 className="text-4xl text-gray-950 font-bold sm:text-5xl lg:text-6xl">
              Discover your next Heaven
            </h1>
            <h3 className="text-xl font-semibold">
              Find awesome rental properties
            </h3>
            <SelectPropertyInput />
          </div>
        </div>

        {/* Hero image */}
        <div className="relative md:w-1/2 md:h-full hidden md:block">
          <Image
            src={heroImage}
            alt="Hero image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
