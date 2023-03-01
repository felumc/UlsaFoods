import '../../Css/Inicio/CardProd.css'
import React from 'react';

function CardProd(props) {
    return (
        <>
            <div key={props.id} className="col-sm-6 col-md-6 col-lg-6">
                <div className="food-card food-card--vertical">
                    <div className="food-card_img">
                        <img src={props.url_imagen} alt="" />
                    </div>
                    <div className="food-card_content">
                        <div className="food-card_title-section">
                            <a href="#!" className="food-card_title">{props.nombre}</a>
                            <span className="food-card_author">En stock  {props.stock}</span>
                            <p className="food-card_author">Disponible en la cafetería {props.cafeteria}</p>

                        </div>
                        <div className="Agregadiv">
                            {props.children}
                        </div>
                        <div className="food-card_bottom-section">
                            
                            <hr />
                            <div className="space-between">
                                <div className="food-card_price">
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