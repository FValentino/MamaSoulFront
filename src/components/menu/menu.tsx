import React from "react";
import { Grid } from "@mui/material";

import styles from "./menu.module.scss"
import logo from "@assets/image/logoNegro.png"

export default function Menu(){
    return (
        <Grid container xs={12} className={styles.menuContainer}>
            <Grid item xs={2} sm={2} md={2} className={styles.navbarLogoContainer}>
                <img src={logo} alt="logo" className={styles.image} />
            </Grid>
            <Grid container xs={10} sm={10} md={10} className={styles.navBarOptionsContainer}>
                <Grid item xs={10} sm={10} md={5} className={styles.navbarContainer}>
                    <ul className={styles.navbarNav}>
                        <li className={styles.navItem}><a href="#" className={styles.navLink}>Inicio</a></li>
                        <li className={styles.navItem}><a href="#" className={styles.navLink}>Nosotros</a></li>
                        <li className={styles.navItem}><a href="#" className={styles.navLink}>Categoria</a></li>
                        <li className={styles.navItem}><a href="#" className={styles.navLink}>Contacto</a></li>
                    </ul>
                </Grid>
                <Grid xs={10} sm={10} md={5} item  className={styles.navbarContainerUser}>
                    <ul className={styles.navbarNav}>
                        <li className={styles.navItem}><a href="#" className={styles.navLink}>Iniciar sesion</a></li>
                        <li className={styles.navItem}><a href="#" className={styles.navLink}>Registrarse</a></li>
                    </ul>
                </Grid>
            </Grid>
        </Grid>
    );
}