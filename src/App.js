
//IMPORT 
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/dhdcatalogo" element={<Home/>}/>

        <Route path="/dhdcatalogo/ropa" element={<Ropa />} />
        <><Route path="/dhdcatalogo/ropa/:marca" element={<Catalogo/>}/></>
        <><Route path="/dhdcatalogo/ropa/:marca/:producto" element={<Producto/>}/></>
        <Route path="/dhdcatalogo/electronicos" element={<Electronicos />} />
        <Route path="/dhdcatalogo/otros" element={<Otros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
