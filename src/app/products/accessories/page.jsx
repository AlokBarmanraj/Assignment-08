import BeachProductsCard from '@/components/BeachProductsCard';
import React from 'react';

const AccessoriesPage = async() => {

  const res = await fetch("https://beach-product.onrender.com/beach");
  const data = await res.json();
  return (
    <div className="mt-16">
      <div >
        <h1 className="text-5xl font-bold">Beach Accessories</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto items-center justify-center gap-5 mt-5 mb-20">
        {data.map((item) => (
          <div key={item.id}>
            <BeachProductsCard item={item}></BeachProductsCard>
          </div>
        ))}
      </div>
    </div>
    );
};

export default AccessoriesPage;