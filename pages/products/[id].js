import { getPaths, getProductDetails } from '../../lib/load-products'
import Link from 'next/link'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

export async function getStaticPaths() {

    const data = await getPaths()
    const paths = data.map((productRoute) => {
        return {
            params: {
                id: productRoute.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const data = await getProductDetails(context)
    return {
        props: {
            data,
        }
    }
}



const productDetails = ({ data }) => {
    return (
        <>
            <nav>
                <Link href='/'>
                    <h2>LIBRA</h2>
                </Link>
                <span><ShoppingBasketOutlinedIcon /></span>
            </nav>
            <div className="productDetailsContainer">
                <div className="productDetailsImage">
                    <img src={data.productImg} alt="" />
                </div>
                <div className="productDetailsText">
                    <h1>{data.productText}</h1><br />
                    <p>{data.reviews}</p><br />
                    <p>{data.subProductText}</p><br />
                    <p>{data.productDescription}</p><br />
                    <p>{data.productContent}</p><br /><br />
                    <hr /><br /><br />
                    <div className="buyDiv">
                        <h1>${data.price}</h1>
                        <button className='addToCart'><ShoppingBasketOutlinedIcon className='cartIcon'/>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default productDetails;