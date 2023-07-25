import { useContext , useReducer , createContext } from "react";
import cartReducer from "./CartReducer";

const CartContext = createContext()
const CartContextDispatcher = createContext()

const initialState = {
    cart : [
        {
            id: 2,
            qty : 5 ,
            name: "Adidas",
            description: [{ support: "گارانتی مادام العمر" }, { support: "اورجینال" }],
            price: 110,
            offPrice: 100,
            discount: 8,
            image: "https://s6.uupload.ir/files/andres-jasso-pqbl_mxmaue-unsplash_gkir.jpg",
          }
    ] ,
    total : 0
}
const CartProvider = ({children}) => {
    const [cart , dispatch] = useReducer(cartReducer, initialState)
    return ( 
        <CartContext.Provider value={cart}>
            <CartContextDispatcher.Provider value={dispatch}>
                {children}
            </CartContextDispatcher.Provider>
        </CartContext.Provider>
     );
}
 
export default CartProvider;
export const useCart =()=> useContext(CartContext);
export const useCartActions = ()=> useContext(CartContextDispatcher)