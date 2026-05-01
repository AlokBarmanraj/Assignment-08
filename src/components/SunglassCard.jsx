import Image from "next/image";
import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const SunglassCard = ({ item }) => {
  const { name, brand, price, rating, image } = item;
  return (
    <div className="max-w-[520px] h-[390px] bg-white border border-gray-200 p-8 rounded-xl space-y-1 shadow-2xl">
      <Image src={image} width={220} height={120} alt={item.name}></Image>
      <p>{name}</p>
      <p>{brand}</p>
      <p>{price}</p>
      <h4 className="flex items-center gap-1.5">
        <div className="flex">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStarHalf />
          <IoIosStarOutline />
        </div>
        {rating}
      </h4>
    </div>
  );
};

export default SunglassCard;
