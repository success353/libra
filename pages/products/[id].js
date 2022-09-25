import { getPaths, getProductDetails } from '../../lib/load-products'

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



const productDetails = ({data}) => {
    return ( 
        <div className="productDetailsContainer">
            <h1>Product Details</h1>
            <div className="productDetailsPage">
                <img src={data.productImg} alt="" />
            </div>
        </div>
     );
}
 
export default productDetails;