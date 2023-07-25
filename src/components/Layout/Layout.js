import Navigation from "../Navigation/Navigation";
import style from './Layout.module.css'

const Layout = ({children}) => {
    return ( 
        <div className={style.layout}>
            <Navigation/>
            {children}
        </div>
     );
}
 
export default Layout;