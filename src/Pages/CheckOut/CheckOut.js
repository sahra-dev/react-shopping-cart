import { useCart } from "../../Providers/CartProviders";
import Layout from "../../components/Layout/Layout";
import style from './Checkout.module.css'

const CheckOut = () => {
    const {cart} = useCart()
    let number = 1
    return ( 
        <Layout>
            <div className={style.checkoutBody}>
                <h2> لیست محصولات </h2>
                {cart.map(product =>{
                    return <div className={style.productBody}>
                        <span className={style.productNumber}>{number++}</span>
                        <span className={style.productName}>{product.name}</span>
                        <span className={style.productQty}>تعداد: {product.qty}</span>
                        <span className={style.productDisc}> {product.discount ? 'با تخفیف شگفت انگیز' : ""}</span>
                    </div>
                })}
                <button className={style.checkoutBodyBtn}>ادامه ی خرید</button>
            </div>
        </Layout>
     );
}
 
export default CheckOut;