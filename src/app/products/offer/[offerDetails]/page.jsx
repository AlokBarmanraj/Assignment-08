import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";

const OfferDetailsPage = async ({ params }) => {
  const { offerDetails } = await params;
  const res = await fetch("https://offer-price.onrender.com/offer");
  const data = await res.json();
  const offer = data.find((of) => of.id == offerDetails);
  const {
    name,
    brand,
    originalPrice,
    rating,
    image,
    tag,
    salePrice,
    description,
  } = offer;
  return (
    <div className="max-w-[620px] bg-white border border-gray-200 rounded-xl space-y-1 shadow-2xl mt-16 mb-16 mx-auto">
      <div className="flex justify-end">
        <div className="bg-red-400 w-20 text-center font-bold rounded-full">
          {tag}
        </div>
      </div>
      <div className="p-8 space-y-2">
        <Image src={image} width={520} height={320} alt={name}></Image>
        <p className=" text-lg font-bold">Name: {name}</p>
        <p>Brand: {brand}</p>
        <p className=" flex items-center text-lg font-bold gap-2">
          Price:{" "}
          <span className="line-through text-gray-400">${originalPrice}</span>{" "}
          <span>${salePrice}</span>
        </p>
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
    </div>
  );
};

export default OfferDetailsPage;
