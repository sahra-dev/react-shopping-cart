const addToCart = (state, payload) => {
  const updatedCart = [...state.cart]
  const index = state.cart.findIndex((p) => p.id === payload.id)
  if (state.cart.find((p) => p.id === payload.id)) {
    const product = { ...state.cart[index] }
    product.qty++
    updatedCart[index] = product
  } else {
    const product = { ...payload }
    product.qty++
    updatedCart.push(product)
  }
  return { ...state, total: state.total + 1, cart: updatedCart }
}
const decreaseProductInCart = (state, payload) => {
  const updatedCart = [...state.cart]
  const index = state.cart.findIndex((p) => p.id === payload.id)
  const product = { ...state.cart[index] }
  if (product.qty > 1) {
    product.qty--
    updatedCart[index] = product
  } else {
    updatedCart.splice(index, 1)
  }
  return { total: state.total - 1, cart: updatedCart }
}
const removeFromCart = (state, payload) => {
  const index = state.cart.findIndex((p) => p.id === payload.id)
  const updatedCart = [...state.cart]
  updatedCart.splice(index, 1)
  return {
    ...state,
    total: state.total - payload.qty,
    cart: updatedCart,
  }
}
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action.payload)
    case 'DECREASE_ITEM_IN_CART':
      return decreaseProductInCart(state, action.payload)
    case 'DELETE_ITEM_IN_CART':
      return removeFromCart(state, action.payload)
    default:
      return state
  }
}

export default cartReducer
