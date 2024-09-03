import React from "react";

import styles from './productCard.module.scss'

interface ProductCardProps{
    image: string,
    title: string,
    price: number
}


export default function ProductCard(props : ProductCardProps){
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={props.image} alt={props.title} className={styles.image}/>
            </div>

            <div className={styles.title}>
                <p> {props.title} </p>
            </div>

            <div className={styles.price}>
                <p> $ {props.price} </p>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.button}>
                    Agregar a carrito
                </button>
                <button className={styles.button}>
                    ver producto
                </button>
            </div>
        </div>
    );
}