
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemContainers from './ItemContainers/ItemContainers'
import ItemsDetailContainer from './Detail/ItemsDetailContainer';
import Cart  from './Cart/Cart'
import CartContextProvider from './Context/CartContext';
import ItemCount from './ItemCount/ItemCount';



function App() {

  return (
      
     <CartContextProvider>
     <BrowserRouter>
    <div className="App">
      <NavBar/>
                     {/*el exact: para que me muestre exactamente la ruta*/}
    
       <Routes>
         
        <Route exact  path="/"   element={ <ItemContainers/>}/> 
        <Route exact  path="/categoria/:idcategoria"   element={ <ItemContainers/>}/> 
        <Route exact path="/detalle/:id"   element={<ItemsDetailContainer/>}/> {/*cuando presiones detalle , me llevara a detalle*/}
        <Route exact path="/cart" element={<Cart/>}/>  {/*cuando presiones cart , me llevara al cart*/}

      
      </Routes>
    
    </div>
    </BrowserRouter>
    </CartContextProvider>
  
  );
}

export default App;
