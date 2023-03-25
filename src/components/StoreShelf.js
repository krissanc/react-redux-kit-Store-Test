import React from 'react';
import { useDispatch } from 'react-redux';

import '../styles/StoreShelf.css';

import Products from '../Products.js';

const StoreShelf = () => {

    const dispatch = useDispatch();

    return (
        <div className="store">
            <h1> Store shelf </h1>
            <div className="shelf">
                {/* Loop through Products.js and render everything out
            everything onto the 'store shelf' */}
                {Products.map((item) => {
                    return (
                        <div key={item.id} className="item">
                            <p> {item.name} </p>
                            <img src={item.image} alt=""></img>
                            <p> {item.price} </p>
                            <button onClick={() => { dispatch({ type: 'ADDTOCART', payload: item }) }}> Add to cart </button>
                        </div>
                    )
                })}

            </div>

        </div>
    )

}

export default StoreShelf;