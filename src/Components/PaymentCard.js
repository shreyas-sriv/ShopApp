import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import './checkout.css'

function PaymentCard() {

    const [cvc, setCvc] = useState('');
    const [expiry, setExpiry] = useState('');
    const [focus, setFocus] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputFocus = (e) => {
        setFocus(e.target.name);
    }


/**
 * input handler for number change for card
 * does pattern matching for numbers
 */
    const handleInputChangeNumber = (e) => {
        const { value } = e.target;
        if(value  === "" ) {
            setNumber("");
            return;
        }
        const pattern = new RegExp('^\[1-9]+$')
        if(!value.match(pattern)) {
            document.getElementById("cardNo").value = "";
            return;
        }
        setNumber(value);
    }

/**
 * input handler for name change for card
 */
    const handleInputChangeName = (e) => {
        const { value } = e.target;
        setName(value);
    }

/**
 * input handler for expiry change for card
 * does pattern matching for expiry
 */
    const handleInputChangeExpiry = (e) => {
        const { value } = e.target;
        if(value  === "" ) {
            setExpiry("");
            return;
        }
        const pattern = new RegExp('^\[1-9]+$')
        if(!value.match(pattern)) {
            document.getElementById("expiryDate").value = "";
            return;
        }
        setExpiry(value);
    }

/**
 * input handler for CVC change for card
 * does pattern matching for cvc
 */
    const handleInputChangeCVC = (e) => {
        const { value } = e.target;
        if(value  === "" ) {
            setCvc("");
            return;
        }
        const pattern = new RegExp('^\[1-9]+$')
        if(!value.match(pattern)) {
            document.getElementById("cvcNo").value = "";
            return;
        }
        setCvc(value);
    }



    return (
        <div className="">
            <div id="PaymentForm" className='payment-form'>
                <div className="payment-card">
                <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={name}
                    number={number}
                />
                </div>
                <div className="payment-input form-group mt-3 ms-7 w-64">
                    <input
                        className='form-control'
                        type="tel"
                        name="name"
                        placeholder="Name"
                        onChange={handleInputChangeName}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="number"
                        id = "cardNo"
                        maxLength="16" 
                        className='form-control mt-1'
                        placeholder="Card Number"
                        pattern="[\d| ]{16,22}"
                        onChange={handleInputChangeNumber}
                        onFocus={handleInputFocus}
                    />
                    <div className="row">
                        <div className="col-6">
                            <input
                                type="tel"
                                name="expiry"
                                id = "expiryDate"
                                maxLength="4" 
                                className='form-control mt-1'
                                placeholder="Enter Expiry"
                                pattern="\d\d/\d\d"
                                onChange={handleInputChangeExpiry}
                                onFocus={handleInputFocus}
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="tel"
                                name="cvc"
                                id = "cvcNo"
                                maxLength="4" 
                                className="form-control mt-1"
                                placeholder="CVC"
                                pattern="\d{3,4}"
                                required
                                onChange={handleInputChangeCVC}
                                onFocus={handleInputFocus}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentCard;