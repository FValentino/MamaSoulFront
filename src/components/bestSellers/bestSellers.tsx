import React from "react";
import Slider from "react-slick";
import { Grid } from "@mui/material";

import styles from './bestSellers.module.scss'

export default function BestSellers(){

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <section className={styles.container} >
            <Slider {...settings}>
                <Grid item xs={3}>
                    <div className={styles.gridItem}>
                        <h3>1</h3>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className={styles.gridItem}>
                        <h3>2</h3>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className={styles.gridItem}>
                        <h3>3</h3>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className={styles.gridItem}>
                        <h3>4</h3>
                    </div>
                </Grid>
            </Slider>
        </section>
    );
}