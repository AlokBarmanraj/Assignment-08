import SummerOutfitsCard from "@/components/SummerOutfitsCard";
import React from "react";

const SummerOutfitsPage = async () => {
  const res = await fetch("https://summer-outfits.onrender.com/summer");
  const data = await res.json();
  return (
    <div className="mt-16">
      <div>
        <h1 className="text-5xl font-bold">Summer OutFits</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto items-center justify-center gap-5 mt-5 mb-20">
        {data.map((item) => (
          <div key={item.id}>
            <SummerOutfitsCard item={item}></SummerOutfitsCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummerOutfitsPage;
