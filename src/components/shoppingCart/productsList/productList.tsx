import React, { useEffect, useState } from "react";
import styles from './productList.module.scss'
import { Product, getProduct } from "@utils/products";
import { Grid } from "@mui/material";

export default function ProductList(){
    const [product, setProduct] = useState<Product | null>(null);
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


    return(
        
        <Grid container xs={8} className={styles.products}>
            <Grid item xs={6} className={styles.productDetail}>
                <div className={styles.productImageContainer}>
                    <img src={product?.image} alt="" className={styles.productImage}/>
                </div>
                <div className={styles.detail}>
                    <p> {product?.title} </p>
                    <p> {product?.category} </p>
                    <p> remover </p>
                </div>
            </Grid>
            <Grid item xs={2} className={styles.quantity}>
                <button>-</button>
                <input type="text" value={1} disabled={true} className={styles.quantityInput}/>
                <button>+</button>
            </Grid>
            <Grid item xs={2} className={styles.price}>
                <p>${product?.price}</p>
            </Grid>
            <Grid item xs={2} className={styles.total}>
                <p>${product?.price}</p>
            </Grid>
        </Grid>
    );
}

/* 
<div className={styles.products}>
                <div className={styles.productDetails}>
                    <div className={styles.imageContainer}>
                        <img src={product?.image} alt="" className={styles.image}/>
                    </div>
                    <div className={styles.details}>
                        <p> {product?.title} </p>
                        <p> {product?.category} </p>
                        <p> remover </p>
                    </div>
                </div>
            </div>

            <div className={styles.orderDetails}>
                <div className={styles.cantidad}>
                    <div>
                        <p>Cantidad</p>
                    </div>
                    <div className={styles.cantidadButtons}>
                        <button> - </button>
                        <input type="text" maxLength={2} minLength={1} disabled={true} value={1} className={styles.cantidadInput}/>
                        <button> + </button>
                    </div>
                </div>

                <div className={styles.price}>
                    <div>
                        <p>Precio</p>
                    </div>
                    <p>${product?.price}</p>
                </div>

                <div className={styles.total}>
                    <div>
                        <p>Total</p>
                    </div>
                    <p>${product?.price}</p>
                </div>
            </div>
*/