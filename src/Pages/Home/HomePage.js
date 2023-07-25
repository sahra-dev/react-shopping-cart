import Layout from '../../components/Layout/Layout'
import * as data from '../../data'
import style from './HomePage.module.css'
import { useCart, useCartActions } from '../../Providers/CartProviders'
import checkInCart from '../../utils/checkInCart'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const HomePage = () => {
  const dispatch = useCartActions()
  const { cart } = useCart()
  const addProducthandler = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
    toast.success('سفارش شما ثبت شد')
  }
  const history = useHistory()
  const linkToCartPage = ()=>{
    history.push('/cart')
  }
  
  return (
    <Layout>
      <span className={style.toastify}>
        <ToastContainer position="top-right" />
      </span>
      <div className={style.productsBody}>
        {data.products.map((product) => {
          return (
            <div className={style.productCmp} key={product.id}>
              <div className={style.productImg}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={style.productDesc}>
                <div className={style.productName}>{product.name}</div>
                <div className={style.productPrice}>
                  <span className={(product.discount>0) ? style.through : ""}>{product.price} $</span>
                  {
                  (product.discount >0) ? 
                  <>
                  <span className={style.discount}>{product.discount}%</span>
                  <span className={style.productPrice}>{product.offPrice} $</span> 
                 </>: ''}
                  </div>
              </div>
              <button
              className={style.productBtn}
                onClick={checkInCart(cart,product) ? ()=> linkToCartPage() :() => addProducthandler(product)}
              >
                {checkInCart(cart, product) ? (
                 <span>
                  ادامه سفارشات
                  </span>
                ) : (
                  <span> اضافه به سبد خرید </span>
                )}
              </button>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default HomePage
