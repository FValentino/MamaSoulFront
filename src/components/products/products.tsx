import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { Product, getAllProducts } from "@utils/products";
import ProductCard from "./productCard/productCard";

import styles from './products.module.scss'

export default function Products(){

    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const data = await getAllProducts();
                setProducts(data)
            }catch(error){
                setError('Failed to fetch products');
            }
        }

        fetchProducts();
    },[]);

    function showProducts (){
        const productList = products.map( (product : Product) =>{
            return(
                <Grid item xs={4} md={3} className={styles.gridItem}> 
                    <ProductCard 
                        image={product.image} 
                        title={product.title} 
                        price={product.price} 
                    /> 
                </Grid>
            ); 
        });

        return productList
    } 
    
    return (
        <section>
            <div className={styles.title}>
                <h2>Todos los productos</h2>
            </div>

            <div className={styles.container}>
                <Grid container xs={12} spacing={3} className={styles.gridContainer}>
                    {showProducts()}
                </Grid>   
            </div>
        </section>
    );
}