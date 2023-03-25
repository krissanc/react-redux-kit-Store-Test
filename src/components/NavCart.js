import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import '../styles/NavCart.css'

const NavCart = () => {

    const myStore = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="nav-cart">
            {myStore.itemsInCart.map((item, index) => {
                return (
                    <div key={index} className="nav-cart-item">
                        <p> {item.name} </p>
                        <img src={item.image} alt=""></img>
                        <p> {item.price} </p>
                        <button onClick={() => { dispatch({ type: 'REMOVEFROMCART', payload: [item, index] }) }}> X </button>
                    </div>
                )
            })}
        </div>
    )
}

export default NavCart