import Layout from '../../components/Layout/Layout'
import * as data from '../../data'
import style from './HomePage.module.css'
import {useCartActions} from '../../Providers/CartProviders'

const HomePage = () => {
  const dispatch = useCartActions()
  const addProducthandler = (product) => {
    console.log(product.id)
    dispatch({type : 'ADD_TO_CART' , payload: product})
  }
  return (
    <Layout>
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
                Add to Cart
              </button>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default HomePage
