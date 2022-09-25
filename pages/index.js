import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import Link from 'next/link'
const Home = () => {
  return (
    <>
      <nav>
        <Link href='/'>
          <h2>LIBRA</h2>
        </Link>
        <span><ShoppingBasketOutlinedIcon /></span>
      </nav>
      <div className="container-home">
        <h1>
          Protect the feeling of <span>being comfortable</span> in your skin.       
          <Link href='/products'>
            <span className='icon'>
                <ArrowRightAltOutlinedIcon fontSize='large' />
            </span>
          </Link>
        </h1>
      </div>
    </>
   );
}
 
export default Home;