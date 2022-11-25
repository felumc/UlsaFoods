import '../../Css/Inicio/CardProd.css'
import React from 'react';

function CardProd(props) {
    return (
        <>
            <div key={props.id} class="col-sm-6 col-md-6 col-lg-6">
                <div class="food-card food-card--vertical">
                    <div class="food-card_img">
                        <img src={props.url_imagen} alt="" />
                    </div>
                    <div class="food-card_content">
                        <div class="food-card_title-section">
                            <a href="#!" class="food-card_title">{props.nombre}</a>
                            <span className="food-card_author">En stock  {props.stock}</span>
                            <p className="food-card_author">Disponible en la cafetería {props.cafeteria}</p>

                        </div>
                        <div className="Agregadiv">
                            {props.children}
                        </div>
                        <div class="food-card_bottom-section">
                            
                            <hr />
                            <div class="space-between">
                                <div class="food-card_price">
                                    <span>$ {props.precio} MXN</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export { CardProd }