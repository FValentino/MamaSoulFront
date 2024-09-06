import React, {useState, useEffect} from "react";
import { Product, getProduct } from "@utils/products";

import styles from './product.module.scss'

/**interface Productproduct?{
    image: string,
    title: string,
    description: string,
    price: number
}**/


export default function SingleProduct(/**product?:Productproduct?**/){

    const [product, setProduct] = useState<Product | null>(null)
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchProduct = async ()=>{
            try{
                const data = await getProduct();
                setProduct(data)
            }catch(error){
                setError('Failed to fetch products');
            }
        }

        fetchProduct();
    },[]);

    return (
        <section className={styles.container}>
            <div className={styles.imagesContainer}>
                <div className={styles.mainImageContainer} >
                    <img src={product?.image} alt="" className={styles.mainImage} />
                </div>
                <div className={styles.imageListContainer}>
                    <div className={styles.imageListItem}> 
                        <img src={product?.image} alt="" className={styles.imageList}/> 
                    </div>
                    <div className={styles.imageListItem}> 
                        <img src={product?.image} alt="" className={styles.imageList}/> 
                    </div>
                    <div className={styles.imageListItem}> 
                        <img src={product?.image} alt="" className={styles.imageList}/> 
                    </div>
                    <div className={styles.imageListItem}> 
                        <img src={product?.image} alt="" className={styles.imageList}/> 
                    </div>
                </div>
            </div>

            <div className={styles.productInfo}>
                <h2>{product?.title}</h2>
                <p> {product?.description} </p>
                <p> ${product?.price} </p>
                <button className={styles.button}>Agregar al carrito</button>
            </div>
        </section>
    );
}