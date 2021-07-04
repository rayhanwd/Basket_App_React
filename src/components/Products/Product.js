import React from 'react';
import './Product.css';
import { FaRegPlusSquare } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { selectedProduct } from '../../redux/actions/productsActions';

const Product = (props) => {
    const { id, name } = props.data;
    const dispatch = useDispatch();
    const Cart = props.data;

    const handleClick = () => {
        dispatch(selectedProduct(Cart))
        console.log('error', id)

    }


    return (
        <div className="product">
            <div onClick={() => handleClick()} className="product__icon">
                <FaRegPlusSquare /><span className="product__name">{name}</span>
            </div>
        </div>
    );
};

export default Product;