
//IMPORT 
import { HashRouter, Route, Routes } from "react-router-dom";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'

// BARRA DE NAVEGACION
import Navigation from "./components/barra_navegacion/Navigation";
import Home from './Home';

// CATEGORIAS
import Ropa from "./components/categoria_Ropa/Ropa";
// SUB
import Catalogo from './components/categoria_Ropa/Catalogo';
import Producto from './components/categoria_Ropa/Producto';


import Electronicos from "./components/categoria_Electronicos/Electronicos";
import Otros from "./components/categoria_otros/Otros";


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/ropa" element={<Ropa />} />
        <><Route path="/ropa/:marca" element={<Catalogo/>}/></>
        <><Route path="/ropa/:marca/:producto" element={<Producto/>}/></>
        <Route path="/electronicos" element={<Electronicos />} />
        <Route path="/otros" element={<Otros />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
