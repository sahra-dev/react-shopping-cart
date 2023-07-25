import { NavLink } from 'react-router-dom'
import styles from './navigation.module.css'
import { useCart } from '../../Providers/CartProviders'

const Navigation = () => {
  const { total } = useCart()
  return (
    <header className={styles.mainHeader}>
      <h2>SaHRa Shopping</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={styles.activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName={styles.activeLink}>
             سبد خرید <span>{total}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
