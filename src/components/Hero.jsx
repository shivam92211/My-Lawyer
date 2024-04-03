"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 md:justify-between">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative lg:mr-8 mb-24">
          <Image src="/balance.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to My Lawyer
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Our mission is simple, to provide you with the expert guidance and 
            support when you need it most. Whether you are facing complex legal
            issues or simply seeking advice on the next steps to take,
            our team of experienced lawyers is here to help you navigate
            through the legal process with confidence and clarity. 
            Trust in us to be your steadfast advocates, guiding you towards
            the best possible outcome. Let us shoulder the legal burden so 
            you can focus on moving forward. Your peace of mind starts here.
          </p>
          {/* BUTTONS */}
          {/* <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div> */}
        </div>
      </div>
    </motion.div>
    
  );
};

export default Hero;
