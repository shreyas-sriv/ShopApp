import { useState } from "react";
import PayBtn from "./PayBtn";
import { useSelector } from 'react-redux';
import Product from './Product';
import TotalPrice from "./TotalPrice";
import "./checkout.css";
import PaymentCard from "./PaymentCard";

function Checkout() {
    let cartState = useSelector(state => state.cart);
    let cartItems = cartState.productsInCart;
    const [paymentSuccessFlag , setPaymentSuccessFlag] = useState(false);

    const updatePaymentSuccessFlag = function(val) {
        setPaymentSuccessFlag(val)
    }

    /**
     * Checks for duplicate elements in cart
     * Updates the quantity in cart for each element. without mutating the actual store state
     * it is used to iterate cart listing
     * @param {array} cartItems delivery fees
     */
    const checkDuplicates = function (cartItems) {
        let duplicateProductSet = [];
        let finalProduct = [];

        cartItems.forEach(element => {
            if (!duplicateProductSet.includes(element.id)) {
                element.qty = 1;
                finalProduct.push(element);
                duplicateProductSet.push(element.id)
            } else {
                let duplicateElement = finalProduct.filter(function (ele) {
                    if (ele.id === element.id) {
                        return ele;
                    }
                })

                let currEl = duplicateElement[0];
                let oldQty = duplicateElement[0]['qty'];
                currEl['qty'] = oldQty + 1;
            }
        });
        return finalProduct;
    }
    let duplicatedCarts = checkDuplicates(cartItems);
    // JSX for empty cart , in case we dont have any item in cart
    let emptyCartRender = <div>
        <h3 className="display-4">
            Cart is empty. Please add something there.
        </h3>
    </div>


    let paymentSuccess = <div class="alert alert-success alert-dismissible fade show" role="success">
    <strong>Payment Successful</strong>
  </div>

const returnAlert = function () {
      if(paymentSuccessFlag) {
          return paymentSuccess
      }
      return emptyCartRender;  
}
  

    return (
        cartItems.length == 0 ? returnAlert() : (
            <div className="checkout-container">

                <div className="half-containers">
                    <div className="cart-item-container">
                        {duplicatedCarts.map((cartItem) => <Product key={cartItem.id} product={cartItem} type={'cart'} />)}
                    </div>
                </div>
                <div className="half-containers-1 checkout-card  shadow p-3">
                   {
                       paymentSuccessFlag && paymentSuccess
                   }
                    <div className="mt-5 ms-5">
                        <TotalPrice delivery={5} />
                    </div>
                    <div className="mt-3">
                        <PaymentCard />
                    </div>

                    <div class="d-grid gap-2 mt-3 mb-5 ms-5 w-50 ">
                        <PayBtn paymentSuccessUpdate = {updatePaymentSuccessFlag}/>
                    </div>
                </div>
            </div>
        )

    )
}

export default Checkout;