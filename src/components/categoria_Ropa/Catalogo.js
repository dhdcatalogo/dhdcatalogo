import { Link, useParams } from "react-router-dom";
import { marcas_data } from './data_base.js';
import { useState, useEffect } from 'react';

import '../style/productos_style.css'

export default function Catalogo() {
    const marca = useParams();

    for (let i = 0; i < marcas_data.length; i++) {
        if (marcas_data[i].nombre == marca.marca) {
            return (<Gallery lista={marcas_data[i].lista} ruta={marca.marca + '-' + (i)} />);
        }
    }
}

function Gallery(props) {
    const [productos, setProductos] = useState([]);
    useEffect(() => { setProductos(props.lista) }, [])
    return (
        <div className="container mt-3">
            <div className="row">
            {productos.map((pro) => (
                <CardItem id={pro.id} imagen={pro.imagen} detalle={pro.detalle} precio={pro.precio} key={pro.id} ruta={props.ruta} />
            ))}
            </div>
        </div>
    );
}

function CardItem(props) {
    const ruta = '/ropa/' + props.ruta + '/' + props.id;
    return (
        <div className="col-lg-2 col-md-3 col-6">
            <Link className="link" to={ruta}>
                <div className="containerImg">
                    <img className='imgPro' src={props.imagen} />
                    <div className="degrade"></div>
                    <div className="descrip">{props.detalle}</div>
                </div>
                <div className="price">Bs. {props.precio} BOB </div>
            </Link>
        </div >
    );
}
