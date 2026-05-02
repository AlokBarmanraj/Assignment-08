import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Offer = () => {
  return (
    <div className="mt-10 flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className="text-center">
        <div>
          <Image src="/images/50.png" width={500} height={250} alt="50"></Image>
        </div>
        <Link href="/products/offer">
          {" "}
          <Button className="hover:bg-amber-500 hover:text-white mt-5 font-bold text-3xl">
            GO TO OFFER
          </Button>
        </Link>
      </div>
      <div>
        <Image
          src={
            "https://healthway.com.bd/media/images/CeraVe_Moisturizing_blgjBPL.original.jpegquality-60.format-webp.webp"
          }
          width={500}
          height={150}
          alt="offer products"
        ></Image>
      </div>
    </div>
  );
};

export default Offer;
