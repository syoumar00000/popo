import { react } from "@babel/types";
import React from 'react';

const ThirdBlocHome = () => {
    return(
        <div className=" container ">
                <h1> The Third Bloc</h1>
                <br></br>
				<div class="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4 ">
                            <div className="col-lg-3  float-sm-none float-xs-none float-md-none blocGauche2">
                                    <div className="row row-cols-2 row-cols-md-2 g-4">
                                            <div className="col ">
                                                    image
                                            </div>
                                    </div>
                            </div>
                            <div className="col-lg-9 col-md-12  blocDroit2">
                                <h2> texte texte texte texte texte </h2>
                            </div>
                    </div>
              </div>
        </div>
    )
}

export default ThirdBlocHome;

