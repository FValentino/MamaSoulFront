import React from "react";

import Menu from "@components/menu/menu";
import Banner from "@components/banner/banner";
import BestSellers from "@components/bestSellers/bestSellers";

export default function Home(){
    return (
        <div>
            <Menu/>

            <Banner/>

            <BestSellers/>
        </div>
    );
}