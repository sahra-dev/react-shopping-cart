import { useCart, useCartActions } from '../../Providers/CartProviders'
import Layout from '../../components/Layout/Layout'
import style from './Cart.module.css'
import { BsFillTrash3Fill, BsFillCartCheckFill } from 'react-icons/bs'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useEffect } from 'react'

const Cart = () => {
  const { cart , total } = useCart()
  const dispatch = useCartActions()
  const incProductHandler = (product)=>{
    dispatch({type : 'ADD_TO_CART' , payload: product})
  }
  const decProductHandler = (product) =>{
    dispatch({type : 'DECREASE_ITEM_IN_CART' , payload: product})
  }
  const deleteHandler = (product)=>{
    dispatch({type : 'DELETE_ITEM_IN_CART' , payload: product})
  }
  const totalPricecalculating = ()=>{
    let total = 0
    cart.map( p => {
      const oneItem = p.qty * p.offPrice
      total += oneItem
    })
    return total
  }
  useEffect(()=>{
    totalPricecalculating()
  },[cart])
  return (
    <Layout>
      <div className={style.cartBody}>
        <h1 className={style.cartTitle}> سبد خرید</h1>
        <div className={style.cartBodyStyle}>
          {cart.length > 0 ? (
            <>
              <div className={style.productsContainer}>
                {cart.map((product) => {
                  return (
                    <div key={product.id} className={style.productCart}>
                      <span>
                        <div className={style.productCartImg}>
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className={style.productCartDesc}>
                          <div className={style.productName}>
                            {product.name}
                          </div>
                          {product.description.map((desc) => (
                            <div
                              className={style.productSupDesc}
                              key={desc.support}
                            >
                              {desc.support} ,
                            </div>
                          ))}
                        </div>
                        <div className={style.priceSection}>
                          {product.discount > 0 ? (
                            <div
                              className={style.priceSectionPriceWithDiscount}
                            >
                              {product.offPrice * product.qty}$
                            </div>
                          ) : (
                            ''
                          )}
                          <div
                            className={`${style.priceSectionPrice} ${
                              product.discount > 0
                                ? style.priceSectionPriceLine
                                : ''
                            } `}
                          >
                            {product.price * product.qty}$
                          </div>
                          {product.discount > 0 ? (
                            <div className={style.priceSectionDiscount}>
                              {product.discount}%
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </span>
                      <div className={style.productCartBtns}>
                        <button className={style.btnInc} onClick={()=>incProductHandler(product)}>
                          <AiOutlinePlus className={style.incBtn} />
                        </button>
                        <span className={style.productCartBtnsQty}>
                          {product.qty}
                        </span>
                        <button className={style.btnDec} onClick={()=> decProductHandler(product)}>
                          <AiOutlineMinus className={style.decBtn} />
                        </button>
                        <button className={style.btnDelete} onClick={()=> deleteHandler(product)}>
                          <BsFillTrash3Fill className={style.deleteBtn} />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
              <section className={style.cartTotal}>
                <div> تعداد محصولات در سبد خرید : {total} </div>
                <div> قیمت قابل پرداخت : $ {totalPricecalculating()} </div>
                <button className={style.cartTotalBtn}>
                  ثبت سفارش <BsFillCartCheckFill />
                </button>
              </section>
            </>
          ) : (
            <div className={style.emptyCart}> سبد خرید خالی است </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Cart
