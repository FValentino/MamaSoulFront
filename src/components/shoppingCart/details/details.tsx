import React from "react";

import { Grid } from "@mui/material";
import styles from './details.module.scss'

export default function Details(){
    return(
        <Grid container xs={4} className={styles.container}>
            <Grid container xs={12} className={styles.amoutPay}>   
                <Grid container xs={12} className={styles.gridContainer}> 
                    <Grid item xs={6}>
                        <p>impuestos</p>
                    </Grid>
                    <Grid item xs={6}>
                        <p>$345345</p>
                    </Grid>
                </Grid>
                <Grid container xs={12} className={styles.total}>
                    <Grid item xs={6}>
                        <p>total </p>
                    </Grid>
                    <Grid item xs={6}>
                        <p>$456615</p>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container xs={12} className={styles.links}>
                <Grid item xs={6}>
                    <button className={styles.payment}> pagar </button>
                </Grid>
                <Grid item xs={6}>
                    <a href="" className={styles.shopping}> volver a comprar</a>
                </Grid>
            </Grid>
        </Grid>
    );
}