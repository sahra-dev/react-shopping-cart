import Cart from './Pages/CartPage/Cart'
import HomePage from './Pages/Home/HomePage'
import CartProvider from './Providers/CartProviders'
import CheckOut from './Pages/CheckOut/CheckOut'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './app.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/" component={HomePage} />
          </Switch>
        </CartProvider>
      </div>
    </Router>
  )
}

export default App
