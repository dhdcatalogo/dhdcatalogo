import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { marcas_data } from './data_base.js';
import '../style/ropa_style.css';

export default class Ropa extends Component {
  render() { return (<Marcas />); }
}

function Marcas() {
  const [marca, setMarca] = useState([]);
  useEffect(() => {
    setMarca(marcas_data)
  }, [])
  return (
    <div className="container mt-3 text-center">
      <div className="row justify-content-center">
        {marca.map((mar) => (
          <Marca key={mar.id} ruta={mar.nombre} srcimg={mar.linkImagen} />
        ))}
      </div>
    </div>
  );
}

function Marca(props) {
  const ruta = '/ropa/' + props.ruta;
  //
  return (
    <div className="col-5 col-md-3 col-lg-2 m-2">
      <Link to={ruta}>
        <img className="img-fluid p-3" src={props.srcimg} />
      </Link>
    </div>
  );
}
