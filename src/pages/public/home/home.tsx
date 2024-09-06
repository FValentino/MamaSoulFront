import React from "react";

import Menu from "@components/menu/menu";
import Banner from "@components/banner/banner";
import Products from "@components/products/products";
import SingleProduct from "@components/products/product/product";

export default function Home(){
    return (
        <>
            <Menu/>

            <Banner/>
        </>
    );
}