import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { marcas_data } from './data_base.js'

import '../style/producto_style.css';

export default function Producto() {
    const producto = useParams();
    const len = producto.marca.length

    const i1 = parseInt(producto.marca.substring(len - 2, len - 1)) //Marca
    const i2 = parseInt(producto.marca.substring(len - 1, len)) //Categoria
    const i3 = producto.producto //Producto

    const v = marcas_data[i1].lista_categorias[i2].lista_productos[i3]
    return (
        <Imagen
            detalle={v.detalle}
            talla={v.talla}
            precio={v.precio}
            dataimgred={v.dataimgred}
            dataimgori={v.dataimgori}
        />
    );
}

function Imagen(props) {
    return (
        <>
            <section className="section-pro">
                <div className="contenedor-detalles">
                    <div className="detalle">{props.detalle}</div>
                    <div className="datos">
                        <div className="talla">Tallas: {props.talla}</div>
                        <div className="precio">Bs: {props.precio} BOB</div>
                    </div>
                </div>

            </section>
            <div className="contenedor-pro">
                <a href={props.dataimgori[0]} target="_blank"><img className="img-pro" src={props.dataimgred[0]} /></a>
                <a href={props.dataimgori[1]} target="_blank"><img className="img-pro" src={props.dataimgred[1]} /></a>
                <a href={props.dataimgori[2]} target="_blank"><img className="img-pro" src={props.dataimgred[2]} /></a>
                <a href={props.dataimgori[3]} target="_blank"><img className="img-pro" src={props.dataimgred[3]} /></a>
                <a href={props.dataimgori[4]} target="_blank"><img className="img-pro" src={props.dataimgred[4]} /></a>
                <a href={props.dataimgori[5]} target="_blank"><img className="img-pro" src={props.dataimgred[5]} /></a>
            </div>
        </>

    );
}

function Dataimgredori(props) {


    const a = '<>hola</>'

    return (a);
}