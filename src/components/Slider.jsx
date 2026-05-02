"use client";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Slideshow = () => {
  const images = [
    "/images/pice1.png",
    "/images/pice2.png",
    "/images/pice3.png",
    "/images/pice4.png",
    "/images/pice5.png",
  ];

  const zoomInProperties = {
    scale: 1,
    duration: 3000,
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
    <div className="relative h-[250px] md:h-[450px] overflow-hidden mt-10 rounded-xl">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="relative w-full h-[250px] md:h-[450px]">
            <Image
              src={each}
              alt={`slide-${index}`}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </Zoom>

      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 pointer-events-none">
        <h1 className="text-2xl md:text-5xl font-bold">Welcome to My Store</h1>
        <p className="mt-3 text-sm md:text-lg">
          Discover amazing products at the best price
        </p>
        <Link href="/products">
          {" "}
          <button className="mt-5 px-6 py-2 bg-blue-600 rounded-md pointer-events-auto cursor-pointer font-bold hover:bg-amber-500">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Slideshow;
