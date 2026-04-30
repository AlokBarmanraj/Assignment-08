// "use client";
// import React from "react";
// import { Slide } from "@tenedev/react-slideshow";

// const Slider = () => {
//   const images = [
//     "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg",
//     "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
//     "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80",
//   ];
//   return (
//     <div className="w-full max-w-5xl mx-auto mt-6">
//       <Slide
//         images={images}
//         duration={4000}
//         autoSwitch={true}
//         infiniteLoop={true}
//         buttonPosition="overlay"
//         showIndicators={true}
//         pauseOnHover={true}
//         animation="slide"
//         customButton={{
//           left: "❮",
//           right: "❯",
//         }}
//         onSlideChange={(i) => console.log("Current Slide:", i)}
//       />
//     </div>
//   );
// };

// export default Slider;

"use client";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const Slideshow = () => {
  const images = [
    "images/image1.jpg",
    "images/image2.webp",
    "images/image3.jpg",
    "images/image4.avif",
    "images/image5.jpg",
  ];

  const zoomInProperties = {
    scale: 1,
    duration: 1500,
    transitionDuration: 500,
    infinite: true,

    prevArrow: (
      <div className="absolute left-5 top-1/2 -translate-y-1/2 z-20">
        <ArrowLeftIcon className="ml-5 h-10 w-10 text-white bg-black/40 p-2 rounded-full cursor-pointer" />
      </div>
    ),

    nextArrow: (
      <div className="absolute right-5 top-1/2 -translate-y-1/2 z-20">
        <ArrowRightIcon className="mr-5 h-10 w-10 text-white bg-black/40 p-2 rounded-full cursor-pointer" />
      </div>
    ),
  };

  return (
    <div className="w-full h-screen">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="flex justify-center md:items-center items-start w-screen h-[650px] relative"
          >
            <img className="w-full bg-cover" fill src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
