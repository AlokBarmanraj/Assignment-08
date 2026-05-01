import Slider from "@/components/Slider";
import Image from "next/image";
import SunglassesPage from "./products/sunglasses/page";

export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <SunglassesPage></SunglassesPage>
    </div>
  );
}
