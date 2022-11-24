import '../../Css/Inicio/CardProd.css'
import React from 'react';

function CardProd(props) {
    return (
        
                <div key={props.id} className="col-sm-6 col-md-6 col-lg-4">
                    <div className="food-card">
                        <div className="food-card_img">
                            <img src={props.url_imagen} alt="" />
                        </div>
                        <div className="food-card_content">
                            <div className="food-card_title-section">
                                <p className="food-card_title">{props.nombre}</p>
                                <p className="food-card_author">En stock  {props.stock}<p>Disponible en {props.cafeteria}</p>  </p>
                                <br /> <br />


                            </div>
                            <div className="food-card_bottom-section">
                                <div className="space-between">
                                    <div className="Agregadiv">
                                        {props.children}
                                    </div>
                                </div>
                                <hr />
                                <div className="space-between">
                                    <div className="food-card_price">
                                        <span>$ {props.precio}</span>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
     

    )
}
export { CardProd }