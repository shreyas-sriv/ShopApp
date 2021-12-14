import React, { useEffect} from 'react';
import Products from './Components/Products';
import Header from './Components/Header';
import Checkout from './Components/Checkout';
import { useDispatch, useSelector } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { setProductsList } from './state/action-creator/actionCreator';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";
import './ShopApp.css';

function ShopApp() {
  const dispatch = useDispatch();
  const url = "https://fakestoreapi.com/products";
  let productState = useSelector(state => state.product);

  /**
 * Fetch intial products list from API
 */
  const fetchProductData = async () => {
    const response = await axios.get(url);
    const data = response.data;
    dispatch(setProductsList(data));
  }

  // eslint-disable-next-line
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="ShopApp">
     <Router>
      <Header header={"ShopApp"} />
      <div className='container'>
          <Routes>
            <Route exact path="/" element={<Products products={productState.productsInStore} />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </div>
      </Router>
    </div>
  );
}

export default ShopApp;
