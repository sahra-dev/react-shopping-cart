import { useContext , useReducer , createContext } from "react";
import cartReducer from "./CartReducer";

const CartContext = createContext()
const CartContextDispatcher = CartContext()

const initialState = {
    cart : [] ,
    total : 0
}
const CartProvider = ({children}) => {
    const [cart , dispatch] = useReducer(cartReducer, initialState)
    return ( 
        <CartContext.CartProvider value={cart}>
            <CartContextDispatcher.Provider value={dispatch}>
                {children}
            </CartContextDispatcher.Provider>
        </CartContext.CartProvider>
     );
}
 
export default CartProvider;
export const useCart =()=> useContext(CartContext);
export const useCartActions = ()=> useContext(CartContextDispatcher)