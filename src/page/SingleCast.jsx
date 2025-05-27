import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCast = () => {

    const CastData = useLoaderData();
    console.log(CastData)
    return (
        <div>
            Single Cast
        </div>
    );
};

export default SingleCast;