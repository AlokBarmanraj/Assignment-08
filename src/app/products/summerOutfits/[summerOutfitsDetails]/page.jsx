import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";

const SummerOutfitsDetails = async ({ params }) => {
  const { summerOutfitsDetails } = await params;
  const res = await fetch("https://summer-outfits.onrender.com/summer");
  const data = await res.json();
  const outfit = data.find((ou) => ou.id == summerOutfitsDetails);
  const{name, brand, price, rating, image,description}=outfit
  return (
    <div className="max-w-[620px] bg-white border border-gray-200 p-8 rounded-xl space-y-1 shadow-2xl mt-16 mb-16 mx-auto">
      <Image
        src={image}
        width={520}
        height={320}
        alt={name}
      ></Image>
      <p className=" text-lg font-bold">Name: {name}</p>
      <p>Brand: {brand}</p>
      <p className="text-lg font-bold">Price: ${price}</p>
      <p className="text-lg font-bold">Description: {description}</p>
      <h4 className="flex items-center gap-1.5">
        <div className="flex text-amber-500">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStarHalf />
          <IoIosStarOutline />
        </div>
        {rating}
      </h4>
      <Button className="hover:bg-amber-500 hover:text-white mt-5">
        <div className="flex items-center gap-1">
          <span>
            <TiShoppingCart />
          </span>
          <span>Add to Card</span>
          <span>
            <FaPlus />
          </span>
        </div>
      </Button>
    </div>
  );
};

export default SummerOutfitsDetails;
