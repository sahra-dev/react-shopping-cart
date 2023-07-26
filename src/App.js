import Cart from './Pages/CartPage/Cart'
import HomePage from './Pages/Home/HomePage'
import CartProvider from './Providers/CartProviders'
import CheckOut from './Pages/CheckOut/CheckOut'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './app.css'
import SignUpPage from './Pages/SignUpPage/SignupPage'
import LoginPage from './Pages/LogInPage/LoginPage'

const App = () => {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </CartProvider>
      </div>
    </Router>
  )
}

export default App
