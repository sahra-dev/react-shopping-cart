const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cart.find((p) => p.id === action.payload.id)) {
        const index = state.cart.findIndex((p) => p.id === action.payload.id)
        const product = { ...state.cart[index] }
        product.qty++
        const updatedCart = [...state.cart]
        updatedCart[index] = product
        state.cart = [...updatedCart]
        state.total = state.total + 1
      } else {
        state.cart = [
          ...state.cart,
          {
            ...action.payload,
            qty: 1,
          },
        ]
        state.total = state.total + 1
      }
      console.log(action, state)
      return state
    default:
      return state
  }
}

export default cartReducer
