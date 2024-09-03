import React from "react";

import Menu from "@components/menu/menu";
import Banner from "@components/banner/banner";
import Products from "@components/products/products";

export default function Home(){
    return (
        <div>
            <Menu/>

            <Banner/>

            <Products/>
        </div>
    );
}