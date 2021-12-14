import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import "./checkout.css"

function TotalPrice({ delivery }) {
    let cartState = useSelector(state => state.cart);
    let cartItems = cartState.productsInCart;
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let total = 0;
        if (typeof cartItems === 'undefined') {
            return <h3>Loading...</h3>
        }
        else {
            for (let i in cartItems) {
                total += cartItems[i].price;
            }
            setTotalPrice(parseFloat(total).toFixed(2));
        }
    }, [cartItems]);

/**
 * Get Summary of total cost from delivery and total price
 * @param {number} delivery delivery fees
 * @param  {number} totalPrice total price
 */
    let summary = function (delivery, totalPrice) {
        let sum = Number(delivery) + Number(totalPrice);
        return parseFloat(sum).toFixed(2);
    }
    return (

        <div className="price-details ms-4 w-75">
            <div className="price-block">
                <h5 className="mb-2">Total price to pay</h5>
                <h6>Order:{`$ ${totalPrice}`}</h6>
                <h6>Delivery:{`$ ${delivery}`}</h6>
                <h5>Summary:{`$ ${summary(delivery, totalPrice)}`}</h5>
            </div>
        </div>
    )
}

export default TotalPrice;

