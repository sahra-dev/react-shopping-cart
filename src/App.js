import Cart from './Pages/CartPage/Cart'
import HomePage from './Pages/Home/HomePage'
import './app.css'
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/cart' component={Cart} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
