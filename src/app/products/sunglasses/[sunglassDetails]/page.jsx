import React from "react";

const SunglassDetailsPage = async ({ params }) => {
  const { sunglassDetails } = await params;
  const res = await fetch(
    `https://sunglasses-0f8x.onrender.com/sunglasses/${id}`,
  );
  const data = await res.json();
  return (
    <div>
      <h1>details${sunglassDetails}</h1>
    </div>
  );
};

export default SunglassDetailsPage;
