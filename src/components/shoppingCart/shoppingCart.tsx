import React from "react";

import { Grid } from "@mui/material";
import styles from './shoppingCart.module.scss'

import ProductList from "./productsList/productList";
import Details from "./details/details";

export default function ShoppingCart(){
    return(
        <section className={styles.container}>
            <div className={styles.header}>
                <h1>Carrito de compras</h1>
            </div>

            <div className={styles.cartDetails}>
                <Grid container xs={12} className={styles.headerContainer}>
                    <Grid container xs={8} className={styles.productHeader}> 
                        <Grid item xs={6} className={styles.gridItem}> 
                            Producto imagen y nombre
                        </Grid>
                        <Grid item xs={2} className={styles.gridItem}> 
                            Producto cantidad
                        </Grid>
                        <Grid item xs={2} className={styles.gridItem}> 
                            Producto precio
                        </Grid> 
                        <Grid item xs={2} className={styles.gridItem}> 
                            Producto total
                        </Grid> 
                    </Grid>

                    <Grid container xs={4} className={styles.detailHeader}>
                        <Grid item className={styles.gridItem}>
                            <h2>Detalles de la compra</h2>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container xs={12} className={styles.cartContent}>
                    <ProductList/>
                    <Details/>
                </Grid>
            </div>
        </section>
    );
}