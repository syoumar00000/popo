import { react } from "@babel/types";
import React from 'react';
import FirstBlocHome from "./FirstBlocHome";
import SecondBlocHome from "./SecondBlocHome";
import ThirdBlocHome from "./ThirdBlocHome";
import FooterHome from "./Footer";


const Home = () => {
    return(
        <div className=" container-fluid">
           <FirstBlocHome />
           <SecondBlocHome />
           <ThirdBlocHome />
           <FooterHome />
        </div>
    )
}

export default Home;

