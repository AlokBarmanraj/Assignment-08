import React from 'react';
import SkincarePage from './skincare/page';
import SunglassesPage from './sunglasses/page';
import AccessoriesPage from './accessories/page';
import SummerOutfitsPage from './summerOutfits/page';

const AllProducts = () => {
    return (
        <div>
            <SkincarePage></SkincarePage>
            <SunglassesPage></SunglassesPage>
            <AccessoriesPage></AccessoriesPage>
            <SummerOutfitsPage></SummerOutfitsPage>
        </div>
    );
};

export default AllProducts;
