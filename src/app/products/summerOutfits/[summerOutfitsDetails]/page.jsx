import React from 'react';

const SummerOutfitsDetails =async ({params}) => {
    const {SummerOutfitsDetails}= await params
    return (
        <div>
            <h1>details${SummerOutfitsDetails}</h1>
        </div>
    );
};

export default SummerOutfitsDetails;