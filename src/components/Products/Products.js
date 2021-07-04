import React from 'react';
import { FaStore } from 'react-icons/fa';
import './Products.css';
import Product from './Product';
import { useSelector } from 'react-redux';
const Products = () => {

    const products = useSelector((state) => state.allProducts.products);

    return (
        <div>
            <div className="store">
                <div className="store__icon">
                    <FaStore /><span className="store__title">Groceries</span>
                </div>
                {
                    products.map((product) =><Product key={product.id} data={product} />)
                }
                
            </div>
        </div>
    );
};

export default Products;