import OfferCard from "@/components/OfferCard";
import SummerOutfitsCard from "@/components/SummerOutfitsCard";
import React from "react";

const OfferPage = async() => {
  const res = await fetch("https://offer-price.onrender.com/offer");
  const data = await res.json();
  return (
    <div className="mt-16">
      <div>
        <h1 className="text-5xl font-bold">Offer</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto items-center justify-center gap-5 mt-5 mb-20">
        {data.map((item) => (
          <div key={item.id}>
            <OfferCard item={item}></OfferCard>
          </div>
        ))}
      </div>
    </div>
    );
};

export default OfferPage;