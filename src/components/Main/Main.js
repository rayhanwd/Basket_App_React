import React from 'react';
import './Main.css';
import Products from '../Products/Products';
import Cart from './../Cart/Cart';

const Main = () => {
    return (
        <div className="container">
            <div className="row">
                    <div class="col">
                        <Products />
                    </div>
                    <div class="col">
                        <Cart />
                    </div>  
            </div>
        </div>
    );
};

export default Main;