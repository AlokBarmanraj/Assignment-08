import Slider from "@/components/Slider";
import Image from "next/image";
import SunglassesPage from "./products/sunglasses/page";
import SummerOutfitsPage from "./products/summerOutfits/page";
import SkincarePage from "./products/skincare/page";
import AccessoriesPage from "./products/accessories/page";
import OfferPage from "./products/offer/page";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <Offer></Offer>
      <SunglassesPage></SunglassesPage>
      <SummerOutfitsPage></SummerOutfitsPage>
      <OfferPage></OfferPage>
      <SkincarePage></SkincarePage>
      <AccessoriesPage></AccessoriesPage>
    </div>
  );
}
