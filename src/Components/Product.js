import './product.css'
import BuyBtn from './BuyBtn';
function Product({ product, type }) {
    let style = {
        width: '15rem'
    }
    let classList = "card mt-2 ms-1 shadow p-3 mb-5 bg-white rounded";
    let ShowCartButton = true;
    
    // checks whether iteration is for cart listings or products listing
    if (type && type === 'cart') {
        ShowCartButton = false;
        classList = "card mt-2 ms-1 shadow p-3 mb-5 bg-white rounded ms-3";
    }

    return (
        <div className={classList} style={style}>
            <div className="">
                <img className="card-img-top cards-img" src={product.image} alt={product.title} />
            </div>
            <div className="card-body">
                <p className="card-text card-wrap lead">{product.title}</p>
                <p className="card-text lead">{`Price: $${product.price}`}</p>
                {!ShowCartButton && <p className="card-text lead">{`Quantity: ${product.qty}`}</p>}
                {ShowCartButton && <BuyBtn productToCart={product} />}
            </div>
        </div>
    )
}

export default Product;