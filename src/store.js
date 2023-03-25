import { createStore } from 'redux';


const initialState = {
    name: 'cart',

    // Cart functionality
    itemsInCart: [],
    amountOfItemsInCart: 0,
    totalCost: 0,


    // navbar functionality
    // Render navCart , true or false
    navCart: false,

}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADDTOCART':
            return ({
                ...state,
                amountOfItemsInCart: state.amountOfItemsInCart + 1,
                totalCost: state.totalCost + action.payload.price,
                itemsInCart: [...state.itemsInCart, action.payload]
            })
        case 'REMOVEFROMCART':
            return ({
                ...state,
                amountOfItemsInCart: state.amountOfItemsInCart - 1,
                totalCost: state.totalCost - action.payload[0].price,
                itemsInCart: [...state.itemsInCart.slice(0, action.payload[1]).concat(state.itemsInCart.slice(action.payload[1] + 1))]
            })
        case 'TOGGLENAVCART':
            return { ...state, navCart: !state.navCart };
        default:
            return { ...state };

    }
}



export const store = createStore(reducer);


