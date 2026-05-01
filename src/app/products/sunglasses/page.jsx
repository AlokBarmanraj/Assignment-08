import SunglassCard from "@/components/SunglassCard";

const SunglassesPage = async () => {
  const res = await fetch("https://sunglasses-0f8x.onrender.com/sunglasses");
  const data = await res.json();
  console.log(data);
  return (
    <div className="grid grid-cols-4 w-10/12 mx-auto items-center justify-center gap-5">
      {data.map((item) => (
        <div key={item.id}>
          <SunglassCard item={item}></SunglassCard>
        </div>
      ))}
    </div>
  );
};

export default SunglassesPage;
