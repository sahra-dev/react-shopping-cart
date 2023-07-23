import { NavLink } from 'react-router-dom'
import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <header className={styles.mainHeader}>
        <h2>SaHRa Shopping</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={styles.activeLink}> Home Page </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName={styles.activeLink}> Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
