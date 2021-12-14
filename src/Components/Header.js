import CartBtn from './CartBtn';
import { useLocation, useNavigate } from 'react-router-dom';

function Header({ header }) {
    const location = useLocation();
    const navigate = useNavigate();
    let pathName = location.pathname;
    // flag if it is checkout page or not
    let isCheckout = pathName == '/checkout' ? true : false;
    let headerName = isCheckout ? "Check Out" : "Featured";


    let fontStyle = {
        'font-size': '30px',
        'font-weight': '600'
    }

    /**
     * navigates to feature page
     */
    const goBack = function () {
        navigate('/')
    }
    return (
        <nav class="navbar sticky-top  navbar-light bg-light">
            <div class="container-fluid">
                {
                    isCheckout && <button onClick={goBack} className='btn btn-outline'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </button>
                }
                <a className="navbar-brand ms-5" style={fontStyle} href="#">{headerName}</a>
                <ul class="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
                    <li class="nav-item">
                        <CartBtn />
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Header;