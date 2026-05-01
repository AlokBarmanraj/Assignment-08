"use client";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Slideshow = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.webp",
    "/images/image3.jpg",
    "/images/image4.avif",
    "/images/image5.jpg",
  ];

  const zoomInProperties = {
    scale: 1,
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,

    prevArrow: (
      <div className="absolute top-1/2 left-5 -translate-y-1/2 z-20 pointer-events-auto">
        <ArrowLeftIcon className="h-10 w-10 text-white bg-black/40 p-2 rounded-full cursor-pointer hover:bg-black/70 transition backdrop-blur-sm" />
      </div>
    ),

    nextArrow: (
      <div className="absolute top-1/2 right-5 -translate-y-1/2 z-20 pointer-events-auto">
        <ArrowRightIcon className="h-10 w-10 text-white bg-black/40 p-2 rounded-full cursor-pointer hover:bg-black/70 transition backdrop-blur-sm" />
      </div>
    ),
  };

  return (
    <div className="relative w-full h-[400px] md:h-[650px] overflow-hidden mt-10">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="relative w-full h-[400px] md:h-[650px]">
            <Image
              src={each}
              alt={`slide-${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Zoom>

      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 pointer-events-none">
        <h1 className="text-2xl md:text-5xl font-bold">
          Welcome to My Store
        </h1>
        <p className="mt-3 text-sm md:text-lg">
          Discover amazing products at the best price
        </p>
        <button className="mt-5 px-6 py-2 bg-blue-600 rounded-md pointer-events-auto">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
