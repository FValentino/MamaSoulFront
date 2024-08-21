import React, { Component } from "react";
import Slider from "react-slick";

import { Grid} from '@mui/material';

import styles from './banner.module.scss'

import banner from "../../assets/image/banner/beigeAestheticFashionClothingCollectionMediumBanner.png"


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
export default function Banner() {
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Grid xs={12} container className={styles.container}>
                        <Grid item xs={12} sm={6} md={4} className={styles.imageContainer}>
                            <img src={banner} alt="Slide 1" className={styles.image} />
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid xs={12} container className={styles.container}>
                        <Grid item xs={12} sm={6} md={4} className={styles.imageContainer}>
                            <img src={banner} alt="Slide 6" className={styles.image} />
                        </Grid>
                    </Grid>
                </div>
            </Slider>
        </div>
    );
  }