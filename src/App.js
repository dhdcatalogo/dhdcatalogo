
//IMPORT 
import { HashRouter, Route, Routes } from "react-router-dom";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'

// BARRA DE NAVEGACION
import Navigation from "./components/barra_navegacion/Navigation";
import Home from './Home';

// CATEGORIAS

//ROPA
import Ropa from "./components/categoria_Ropa/Inicio";
import CatalogoRop from './components/categoria_Ropa/Catalogo';
import ProductoRop from './components/categoria_Ropa/Producto';

//ELECTRONICO
import Electronicos from "./components/categoria_Electronicos/Inicio";
import CatalogoEle from "./components/categoria_Electronicos/Catalogo";
import ProductoEle from "./components/categoria_Electronicos/Producto";


//OTROS
import Otros from "./components/categoria_otros/Otros";


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/ropa" element={<Ropa />} />
        <><Route path="/ropa/:marca" element={<CatalogoRop/>}/></>
        <><Route path="/ropa/:marca/:producto" element={<ProductoRop/>}/></>


        <Route path="/electronicos" element={<Electronicos />} />
        <Route path="/electronicos/:marca" element={<CatalogoEle/>}/>
        <Route path="/electronicos/:marca/:producto" element={<ProductoEle/>}/>

        <Route path="/otros" element={<Otros />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
