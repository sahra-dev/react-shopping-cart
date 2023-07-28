import { NavLink } from 'react-router-dom'
import styles from './navigation.module.css'
import { useCart } from '../../Providers/CartProviders'
import {FiLogIn} from 'react-icons/fi'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navigation = () => {
  const { total } = useCart()
  return (
    <header className={styles.mainHeader}>
      <h2>SaHRa Shopping</h2>
      <Link to='/login' className={styles.loginSignUp} >
        <FiLogIn/> &nbsp; ثبت نام / ورود 
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={styles.activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName={styles.activeLink}>
             سبد خرید {total ? <span>{total}</span> : ''}
            </NavLink> 
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
