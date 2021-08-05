import { react } from "@babel/types";
import React from 'react';

const SecondBlocHome = () => {
    return(
        <div className=" container secondBlocHome">
             <h1> The Second Bloc</h1>
             <br></br>
             <div class="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col blocGauche">
                                    <div className="row row-cols-2 row-cols-md-2 g-4">
                                            <div className="col inside">
                                                    image
                                            </div>
                                            <div className="col inside">
                                                    texte texte texte texte
                                            </div>
                                    </div>
                                    <div className="row row-cols-2 row-cols-md-2 g-4">
                                            <div className="col inside">
                                                    image
                                            </div>
                                            <div className="col inside">
                                                    texte texte texte texte
                                            </div>
                                    </div>
                                    <div className="row row-cols-2 row-cols-md-2 g-4">
                                            <div className="col  inside">
                                                    image
                                            </div>
                                            <div className="col inside">
                                                    texte texte texte texte
                                            </div>
                                    </div>
                            </div>
                            <div className="col blocDroit">
                                <h2> ceci est la troisième colonne </h2>
                                <p> et voici un autre paragraphe </p>
                            </div>
                    </div>
              </div>
        </div>
    )
}

export default SecondBlocHome;

