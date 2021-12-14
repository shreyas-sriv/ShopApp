import { useDispatch } from 'react-redux';
import { setClearProductCart } from '../state/action-creator/actionCreator';
function PayBtn({paymentSuccessUpdate}) {
    let dispatch = useDispatch();

    /**
     * dispatches clear action to redux after payment
     * alerts successful payment
     */
    function UsePayment() {
        paymentSuccessUpdate(true);
        dispatch(setClearProductCart());
    }
    return (
        <div>
            <button type="button" onClick={() => { UsePayment() }} className="btn btn-primary btn-block">Pay Now </button>
        </div>

    )

}

export default PayBtn;