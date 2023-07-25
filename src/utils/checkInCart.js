const checkInCart = (cart, product) => {
  return cart.find((p) => p.id === product.id)
}
export default checkInCart
