import SkincareCard from '@/components/SkincareCard';
import React from 'react';

const SkincarePage = async () => {
  const res = await fetch("https://skincare-een9.onrender.com/skincare");
  const data = await res.json();
  return (
    <div className="mt-16">
      <div>
        <h1 className="text-5xl font-bold">Skincare</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto items-center justify-center gap-5 mt-5 mb-20">
        {data.map((item) => (
          <div key={item.id}>
            <SkincareCard item={item}></SkincareCard>

          </div>
        ))}
      </div>
    </div>
    );
};

export default SkincarePage;