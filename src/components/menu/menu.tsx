import React, { useEffect, useState } from "react";
import { Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import { useMediaQuery } from "react-responsive";

import { getCategories, Category } from "@utils/category";

import styles from "./menu.module.scss";
import logo from "@assets/image/logoNegro.png";
import { Link } from "react-router-dom";

export default function Menu () {
  const [categories, setCategories] = useState<Category[]>([])
  const [error, setError] = useState<string | null> (null);
  

  const [isNavOpen, setIsNavOpen] = useState<boolean>(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const isBigScreen = useMediaQuery({query: '(min-width: 900px)' });

  useEffect(()=>{
    if (isBigScreen){
      setIsNavOpen(true);
    }
  },[isBigScreen]);

  //Obtener categorias
  useEffect(()=>{
    const fetchCategories = async () =>{
      try {
        const data = await getCategories();
        setCategories(data)
      } catch(error){
        setError('Failed to fetch categories')
      }
    };

    fetchCategories();
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const showMenu = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  function showCategories(){
    const categoryList = categories.map( (category) => {
      return (
        <li className={styles.dropdownItem}> {category} </li>
      );
    });

    return (categoryList)
  }

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
                <li className={styles.navItem}> <Link to='/productos'>Todos los productos</Link> </li>
                <li className={styles.navItem}>
                  <button onClick={showMenu} className={styles.navLinkCategory}>
                    Categorías
                    <IconButton>
                      <ArrowDropDownSharpIcon className={styles.navIcon}/>
                    </IconButton>
                  </button>
                  <ul id="dropdownMenu" className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownMenuShow : ""}`}>
                    {showCategories()}
                  </ul>
                </li>
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
