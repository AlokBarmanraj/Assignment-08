import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";

const SkincareCard = ({item}) => {
  const { id, name, brand, price, rating, image } = item;

  return (
    <div className="max-w-[420px] h-[460px] bg-white border border-gray-200 p-8 rounded-xl space-y-1 shadow-2xl">
      <Link href={`/products/skincare/${id}`}>
        <Image
          src={image}
          width={220}
          height={120}
          alt={item.name}
          className="object-contain h-[220px] w-[420px]"
        ></Image>
      </Link>
      <p className=" text-lg font-bold">Name: {name}</p>
      <p>Brand: {brand}</p>
      <p className="text-lg font-bold">Price: ${price}</p>
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
          <span></span> Buy Now
        </div>
      </Button>
    </div>
    );
};

export default SkincareCard;








