import React from "react";
import { Grid } from "@mui/material";

import styles from './category.module.scss'

export default function Category(){

    return (
        <section>
            <div>
                <h2>Categoria</h2>
            </div>

            <div className={styles.container}>
                <Grid container xs={12} className={styles.gridContainer}>
                    <Grid item xs={3} className={styles.gridItem} >1</Grid>
                    <Grid item xs={3} className={styles.gridItem} >2</Grid>
                    <Grid item xs={3} className={styles.gridItem} >3</Grid>
                    <Grid item xs={3} className={styles.gridItem} >4</Grid>
                </Grid>
                <Grid container xs={12} className={styles.gridContainer}>
                    <Grid item xs={3} className={styles.gridItem}>1</Grid>
                    <Grid item xs={3} className={styles.gridItem}>2</Grid>
                    <Grid item xs={3} className={styles.gridItem}>3</Grid>
                    <Grid item xs={3} className={styles.gridItem}>4</Grid>
                </Grid>
                <Grid container xs={12} className={styles.gridContainer}>
                    <Grid item xs={3} className={styles.gridItem}>1</Grid>
                    <Grid item xs={3} className={styles.gridItem}>2</Grid>
                    <Grid item xs={3} className={styles.gridItem}>3</Grid>
                    <Grid item xs={3} className={styles.gridItem}>4</Grid>
                </Grid>
            </div>
        </section>
    );
}