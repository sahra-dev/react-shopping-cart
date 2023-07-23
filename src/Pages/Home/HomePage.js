import Layout from '../../Layout/Layout'
import * as data from '../../data'
import style from './HomePage.module.css'

const HomePage = () => {
  const addProducthandler = (id) =>{
    console.log(id);
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
              <button className={style.productBtn} onClick={()=>addProducthandler(product.id)}>Add to Cart</button>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default HomePage
