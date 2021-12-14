import Product from './Product';
import './products.css'
function Products({ products }) {

    if (products.length === 0) {
        return <h3>Loading...</h3>
    }
    return <div className='cards-container'>
        {
            products.map((product) => (
                <div key={product.id} >
                    <Product product={product} />
                </div>
            ))
        }

    </div>




}

export default Products;