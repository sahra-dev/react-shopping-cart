import Layout from '../../components/Layout/Layout'
import * as data from '../../data'
import style from './HomePage.module.css'
import { useCart, useCartActions } from '../../Providers/CartProviders'
import checkInCart from '../../utils/checkInCart'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const HomePage = () => {
  const dispatch = useCartActions()
  const { cart } = useCart()
  const addProducthandler = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
    toast.success('سفارش شما ثبت شد')
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
                <div className={style.productPrice}>{product.price} $</div>
              </div>
              <button
                className={style.productBtn}
                onClick={() => addProducthandler(product)}
              >
                {checkInCart(cart, product) ? (
                  <span>
                    <Link to="/cart">ادامه سفارشات</Link>
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
