import React, { useContext , useState} from 'react';
import { Link } from 'react-router-dom';
//context
import { cartContext } from '../context/CartContextProvider';
//icons
import shopIcon from '../assets/icons/shop.svg'
//style
import styles from './Navbar.module.css';
const Navbar = () => {
    const { state } = useContext (cartContext);
    return (
        <div className={styles.maincontainer}>
            <div className={styles.container}>
                <Link className={styles.products} to='/products' >Product</Link>
                <div className={styles.link}>
                <Link className={styles.login} to='/Login' >Login | SignUp</Link>
                <div className={styles.cart}>
                    
                    <Link to="/cart" ><img src={shopIcon} alt='shop' /></Link>
                    <span>{state.itemCounter}</span>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;