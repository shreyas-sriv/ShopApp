let cartInitialState = {productsInCart:[]};
const cartReducer = (state = cartInitialState, action) => {
    if(action.type === 'SET_PRODUCT_CART') {
        let currentProductList = state.productsInCart;
        currentProductList.push(action.payload)
        let newState = {...state,productsInCart:currentProductList}
        return newState;
    }
    else if(action.type ===  'SET_CLEAR_PRODUCT_CART'){
        let currentProductList = state.productsInCart;
        currentProductList.push(action.payload)
        let newState = {...state,productsInCart:[]}
        return newState;
    }
    else {
        return state;
    }
}

export default cartReducer;