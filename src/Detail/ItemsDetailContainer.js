import React from 'react'
import '../App.css'

import {useParams} from 'react-router-dom'
import { getProductos } from '../ItemContainers/ItemList';
import { useEffect, useState,useContext } from 'react'; //importo useContex: es para usar el context
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';


function ItemsDetailContainer({item}) {

  //PARA EL DETALLE/ osea para visualizar el detalle del Producto

    const [productoIndividual , getProducto] = useState({});
    const  {id} = useParams(); //obtengo el id del producto por medio de useParams/para mostrar por categoria



    const [count, setCount] = React.useState(1)

    const {  cartList,  agregarProducto} = useContext(CartContext)// llamo la funcion AgregarPrducto y carList : que es donde esta guardado
    //el array de productos
    
    function onAdd(){  //en esta funcion le paso la  funcion Agregar Producto
      setCount(count)
      agregarProducto({...productoIndividual, cantidad: count}) //la funcion le paso el producto , mas la cantidad que se le pasa por parametro
    }
    console.log(cartList)


    useEffect(() =>{
        getProductos
        .then(data =>{
          //lamo a la appi
          getProducto(data.find(pro =>  pro.id === parseInt(id))) //obtengo la data y con find ; obtengo el id del producto 
          // y lo igualo con el id del parámetro para asi obtener la información de cada producto.
      
        })
        .catch(e => console.log(console.error))
        //.finally(() => paraCargando(false))

    }, [id])


    // PARA AGREGAR AL CART 





    return (
        <div  className="container-detalle">
       <div className="card-header">
       { productoIndividual.nombre}
      </div>
      <div className="card-body">
     < img src={productoIndividual.img} alt="fto" className='imagenes'/>
      {productoIndividual.precio}
      </div>
      <ItemCount  setCount={setCount} count={count}/>
    
              <button onClick={()=>onAdd(1)}>AGREGAR AL CARRITO</button>
        </div>
        
        
    )
}

export default ItemsDetailContainer
