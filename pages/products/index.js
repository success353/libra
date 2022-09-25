import { loadProducts } from '../../lib/load-products'
import Link from 'next/link'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const Products = ({products}) => {
    return (
        <>
            <nav>
                <Link href='/'>
                <h2>LIBRA</h2>
                </Link>
                <span><ShoppingBasketOutlinedIcon /></span>
            </nav>
            <h1 className='productHead'>Our Products</h1>
            <div className="showProducts">
                {products.map(({id, productImg, price, reviews, property, productText}) => (
                    <div className="products" key={id}>
                            <div className="image">
                                <Link href={'/products/' + id}>
                                    <a>
                                        <img src={ productImg } alt="" /><br /> <br />
                                    </a>
                                </Link>
                                <p className="property">{ property }</p>
                            </div>
                            <div className="productTextInfo">
                                <h3 className="productText">{ productText }</h3><br />
                                <div className="price-reviews">
                                    <p className="price">${ price }</p>
                                    <p className="reviews">{ reviews }</p>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default Products;

export async function getStaticProps() {
    const products = await loadProducts()

    return {
        props: {
            products
        }
    }
}
