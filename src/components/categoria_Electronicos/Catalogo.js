import { Link, useParams } from "react-router-dom";
import { marcas_data } from './data_base.js';
import { useState, useEffect } from 'react';

import '../style/productos_style.css'

export default function Catalogo() {
    const marca = useParams();
    const len = marca.marca.length
    const i = parseInt(marca.marca.substring(len - 1, len))
    const v = marcas_data[i]

    const [productos, setProductos] = useState([]);
    useEffect(() => { setProductos(v.lista_categorias) }, [])

    return (
        <>
            <div className="container mt-4 text-center text-uppercase fs-1 fw-bolder">{v.nombre_marca}</div>
            <div className="container mt-3">
                {productos.map((pro) => (
                    <div key={pro.id}>
                        <div className="categoria">{pro.detalle}</div>
                        <Categoria listaProductos={pro.lista_productos} ruta={marca.marca + (pro.id)} />
                    </div>
                ))}
            </div>
        </>
    );
}

function Categoria(props) {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => { setCategorias(props.listaProductos) })
    return (
        <div className="row" key={'ite'}>
            {categorias.map((cat) => (
                <CardItem key={cat.id} id={cat.id} imagen={cat.imagen} detalle={cat.detalle} precio={cat.precio} ruta={props.ruta} />
            ))}
        </div>
    );
}

function CardItem(props) {
    const ruta = '/electronicos/' + props.ruta + '/' + props.id;
    return (
        <div className="col-lg-2 col-md-3 col-6" key={props.id}>
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
