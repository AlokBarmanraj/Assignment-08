import Slider from "@/components/Slider";
import Image from "next/image";
import SunglassesPage from "./products/sunglasses/page";
import SummerOutfitsPage from "./products/summerOutfits/page";
import SkincarePage from "./products/skincare/page";
import AccessoriesPage from "./products/accessories/page";

export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <SunglassesPage></SunglassesPage>
      <SummerOutfitsPage></SummerOutfitsPage>
      <SkincarePage></SkincarePage>
      <AccessoriesPage></AccessoriesPage>
    </div>
  );
}
