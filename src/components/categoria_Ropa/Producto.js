import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { marcas_data } from './data_base.js'

import '../style/producto_style.css';

export default function Producto() {
    const producto = useParams();
    const i = producto.marca.substring(producto.marca.length - 1)
    const j = parseInt(i)
    const v = marcas_data[j].lista
    const n = producto.producto

    for (let i = 0; i < v.length; i++) {
        if (v[i].id == n) {
            return (
                <Imagen
                    detalle={v[i].detalle}
                    talla={v[i].talla}
                    precio={v[i].precio}
                    dataimgred={v[i].dataimgred}
                    dataimgori={v[i].dataimgori}
                />
            );
            break
        }
    }
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
                <a href={props.dataimgori[0]}><img className="img-pro" src={props.dataimgred[0]} /></a>
                <a href={props.dataimgori[1]}><img className="img-pro" src={props.dataimgred[1]} /></a>
                <a href={props.dataimgori[2]}><img className="img-pro" src={props.dataimgred[2]} /></a>
                <a href={props.dataimgori[3]}><img className="img-pro" src={props.dataimgred[3]} /></a>
                <a href={props.dataimgori[4]}><img className="img-pro" src={props.dataimgred[4]} /></a>
                <a href={props.dataimgori[5]}><img className="img-pro" src={props.dataimgred[5]} /></a>
            </div>
        </>

    );
}

function Dataimgredori(props){


    const a = '<>hola</>'
    
    return(a);
}