import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
// component
import Cart from '../shared/Cart';
//context
import { cartContext } from '../context/CartContextProvider';
//style
import styles from './ShopCart.module.css';
const ShopCart = () => {
    const {state , dispatch} = useContext (cartContext);
    return (
        <div className={styles.container}>
            <div className={styles.cardConteiner}>
               {state.selectItems.map(item=><Cart key= {item.id} data={item}/> )}
            </div>
            {
                state.itemCounter > 0  && <div className={styles.payments}>
                    <p><span>Total Items:</span>{state.itemCounter}</p>
                    <p><span>Total payments:</span>{state.total}</p>
                    <div className={styles.buttonContainer} >
                        <button className={styles.clear} onClick={()=> dispatch({type: "CHECKOUT"})}>Check Out</button>
                        <button className={styles.checkout} onClick={()=> dispatch({type: "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>Check Out Successfully</h3>
                    <Link to="/products">Buy more</Link>
                    </div>
            }

            {
                !state.checkout && state.itemCounter === 0 && <div className={styles.complete}>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to shop</Link>
                    </div>
            }
        </div>
    );
};

export default ShopCart;