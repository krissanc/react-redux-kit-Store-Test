import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../styles/Navbar.css'

import NavCart from './NavCart'



const Navbar = () => {

    const myStore = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <nav>
            <div className="cart-icon">
                {/* CLICKABLE CART IMAGE */}
                <img onClick={() => { dispatch({ type: 'TOGGLENAVCART' }) }} src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt=""></img>
                <p className="items-in-cart-indicator"> {myStore.amountOfItemsInCart} </p>
            </div>
            {myStore.navCart && <NavCart />}
        </nav>
    )
}

export default Navbar