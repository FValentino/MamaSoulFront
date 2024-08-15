import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./menu.module.scss";
import logo from "@assets/image/logoNegro.png";

export default function Menu () {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Grid container className={styles.menuContainer} alignItems="center">
      <Grid item xs={12} sm={12} md={2} className={styles.navbarLogoContainer}>
        <img src={logo} alt="logo" className={styles.image} />
      </Grid>
      <Grid item xs={12} sm={12} md={10} className={styles.navBarOptionsContainer}>
        <IconButton className={styles.navbarToggler} onClick={toggleNav}>
          <MenuIcon />
        </IconButton>
        <nav className={`${styles.navbarCollapse} ${isNavOpen ? styles.show : ""}`}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8} className={styles.navbarContainer}>
              <ul className={styles.navbarNav}>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Inicio</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Nosotros</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Categoría</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Contacto</a></li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4} className={styles.navbarContainerUser}>
              <ul className={styles.navbarNav}>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Iniciar sesión</a></li>
                <li className={styles.navItem}><a href="#" className={styles.navLink}>Registrarse</a></li>
              </ul>
            </Grid>
          </Grid>
        </nav>
      </Grid>
    </Grid>
  );
};
