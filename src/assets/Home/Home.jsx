import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {
    const loader = useLoaderData();
    
    return (
        <div className='grid grid-cols-4 gap-2 '>
        
            {loader.map(product => <SingleProduct key={ product.id} product={product}></SingleProduct>)}
        </div>
    );
};

export default Home;