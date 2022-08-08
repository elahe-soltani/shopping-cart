import React, {useContext} from 'react';
//component
import Product from '../shared/Product';
import CatgoriCard from '../shared/CatgoriCard';
//context
import { productContext } from '../context/ProductContextProvider';
//styles
import styles from './Store.module.css';

const Store = () => {
    const products = useContext (productContext);
    const projewlery=products.filter(item => item.category ==="jewelery")
    const prodigital=products.filter(item => item.category ==="electronics")
    const prowomen=products.filter(item => item.category ==="women's clothing")
    const promen=products.filter(item => item.category ==="men's clothing")
    return (
        <>
        <CatgoriCard />
        <div className={styles.name}>jewelery</div>
        <div className={styles.container}>
        
            {
                 projewlery.map(product => <Product 
                                       key={product.id}
                                       productData={product}
                                    />) 
                                   }
            
            
        </div>
        <div className={styles.name}>electric</div>
        <div className={styles.container}>
            {
                 prodigital.map(product => <Product 
                                       key={product.id}
                                       productData={product}
                                    />) 
                                   }
            
            
        </div>
        <div className={styles.name}>women clods</div>
        <div className={styles.container}>
            {
                 prowomen.map(product => <Product 
                                       key={product.id}
                                       productData={product}
                                    />) 
                                   }
            
            
        </div>
        <div className={styles.name}>men clods</div>
        <div className={styles.container}>
            {
                 promen.map(product => <Product 
                                       key={product.id}
                                       productData={product}
                                    />) 
                                   }
            
            
        </div>

        </>
        
    );
};

export default Store;