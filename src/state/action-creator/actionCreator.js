
export const setProductsList = (data) => {
    return {
        type: "SET_PRODUCTS",
        payload: data
    }
}

export const setProductCart = (data) => {
    return {
        type: "SET_PRODUCT_CART",
        payload: data
    }
}

export const setClearProductCart = (data) => {
    return {
        type: "SET_CLEAR_PRODUCT_CART",
        payload: data
    }
}


