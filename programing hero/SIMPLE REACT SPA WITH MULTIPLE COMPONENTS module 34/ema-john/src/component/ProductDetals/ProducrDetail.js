import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProducrDetail = () => {
    const {productKey}=useParams()
    const product = fakeData.find(da =>da.key === productKey)
    
    
    return (
        <div>
           
            <Product addToCart={false} product={product}/>
        </div>
    );
};

export default ProducrDetail;