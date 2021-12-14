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

    let btnStyle = {
        "width":'70%'
    }
    return (
        <div>
            <button type="button" onClick={() => { UsePayment() }} className="btn btn-primary" style={btnStyle}>Pay Now </button>
        </div>

    )

}

export default PayBtn;