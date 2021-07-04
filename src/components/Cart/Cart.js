import React from 'react';
import './Cart.css';
import { FaShoppingBasket, FaRegMinusSquare } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { useSelector } from 'react-redux';

const Cart = () => {
    const product = useSelector((state) => state.product)
    const { name } = product;
    return (
        <div className="cart">
            <div className="cart__icon">
                <div><FaShoppingBasket /><span className="cart__title">Cart</span></div>
                <span className="delete__icon"><TiDelete /></span>
            </div>
            <div className="selected__cart">
                <div className="selected__cart__icon">
                    {name?<><FaRegMinusSquare /><span className="selected__cart__name">{name}</span></>:<span className="selected__cart__name">You have no selected cart</span>}
                </div>
            </div>
        </div>
    );
};

export default Cart;