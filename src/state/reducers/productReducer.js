
let intialState = {productsInStore:[]};

const productReducer = (state = intialState, action) => {
    if(action.type === 'SET_PRODUCTS') {
        let newState = {...state,productsInStore:action.payload}
        return newState;
    }
    else {
        return state;
    }
}

export default productReducer;