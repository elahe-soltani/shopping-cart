import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
//function
import { shorten , isInCart , quantityCount }  from '../helpers/function';
//context
import {cartContext} from '../context/CartContextProvider';
//icons
import trashIcon from '../assets/icons/trash.svg';
//styles
import styles from './Product.module.css';
const Product = ({productData}) => {
    
    const {state , dispatch}= useContext(cartContext);
    return (
        <div className={styles.container}>
            <img src={productData.image} alt='product' className={styles.cardImage}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Ditals</Link>
                <div className={styles.buttonContainer}>
                    {
                        isInCart(state , productData.id)?
                        <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE" , payload:productData})}>+</button> :
                        <button onClick={() => dispatch({type:"ADD_ITEM" , payload:productData})}>ADD to cart</button>
                    }
                    {quantityCount (state , productData.id) > 1  && <button className={styles.smallButton} onClick={ ()=> dispatch({type:"DECREASE" , payload:productData})}>-</button> }
                    {quantityCount (state, productData.id) === 1 && <button className={styles.smallButton} onClick={()=> dispatch({type:"REMOVE_ITEM" , payload:productData})}><img src={trashIcon} alt='trash' style={{width:"15px"}}/></button>}
                    {quantityCount (state , productData.id) >0 && <span className={styles.counter}>{quantityCount(state , productData.id)}</span>}
                </div>
            </div>
        </div>
    );
};

export default Product;