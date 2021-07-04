import React from 'react';
import './Header.css';
import { FaShoppingBasket } from 'react-icons/fa';
const Header = () => {
    return (
        <header className="header__basket">
            <div className="icon">
                <FaShoppingBasket />
            </div>
            <h4>Hello, Basket</h4>
        </header>
    );
};

export default Header;