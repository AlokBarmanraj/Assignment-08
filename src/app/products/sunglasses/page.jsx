import SunglassCard from "@/components/SunglassCard";

const SunglassesPage = async () => {
  const res = await fetch("https://sunglasses-0f8x.onrender.com/sunglasses");
  const data = await res.json();
  return (
    <div className="mt-16">
      <div >
        <h1 className="text-5xl font-bold">Sunglass</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto items-center justify-center gap-5 mt-5 mb-20">
        {data.map((item) => (
          <div key={item.id}>
            <SunglassCard item={item}></SunglassCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SunglassesPage;




















