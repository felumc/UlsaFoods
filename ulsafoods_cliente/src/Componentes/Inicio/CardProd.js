import '../../Css/Inicio/CardProd.css'


function CardProd() {
   

    return (
        <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="food-card">
                    <div className="food-card_img">
                        <img src="https://i.imgur.com/eFWRUuR.jpg" alt="" />
                    </div>
                    <div className="food-card_content">
                        <div className="food-card_title-section">
                            <p className="food-card_title">Nombre de producto</p>
                            <p className="food-card_author">Categoria</p>
                        </div>
                        <div className="food-card_bottom-section">
                            <div className="space-between">
                                <div className="Agregadiv">
                                    <button className="Agregar">Agregar a carrito</button>
                                </div>
                            </div>
                            <hr />
                            <div className="space-between">
                                <div className="food-card_price">
                                    <span>Precio</span>
                                </div>
                                <div className="food-card_order-count">
                                    <div className="input-group mb-3">
                                        <div  className="input-group-prepend">
                                            <button   className="btn btn-outline-secondary minus-btn" type="button" id="button-addon1"><i className="fa fa-minus"></i></button>
                                        </div>
                                        <input type="text" className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                        <div className="input-group-append">
                                            <button  className="btn btn-outline-secondary add-btn" type="button" id="button-addon1"><i className="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
export { CardProd }