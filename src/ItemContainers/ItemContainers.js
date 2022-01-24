import React from 'react'
import '../App.css'
import { useState,  useEffect } from 'react';
import {getProductos} from './ItemList'
import {useParams, Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
function ItemContainers() {

    const [ producto , getProducto] = useState([])
    const [ cargando, paraCargando] = useState(true)   //se inicializa con cargando(true) y finaliza con paraCargando(false)

    const {idcategoria} = useParams()

 
  useEffect(() => {
    
  if(idcategoria){

    getProductos
    .then(data =>{
      //lamo a la appi
      getProducto(data.filter(pro =>  pro.categoria === idcategoria))
  
    })
    .catch(e => console.log(console.error))
    .finally(() => paraCargando(false))
  }else{
    getProductos
    .then(data =>{
    //llamo a la appi
      getProducto(data)
  
   })
    .catch(e => console.log(console.error))
    .finally(() => paraCargando(false))
    console.log('error')

 }






    return () => {
      console.log('clear');
    }
  },[idcategoria])

  console.log(idcategoria)
 
  return (
    <div className="Container">
       {
         cargando ?  <h1>CARGANDO...</h1> :   producto.map( pro => <div key={pro.id}  className="card w-50 mt-5">

       <div className="card-header">
       { pro.nombre}
     </div>
     <div className="card-body">
       < img src={pro.img} alt="fto" className='imagenes'/>
       {pro.precio}
     </div>
    <div  className="card-footer">
      
       <Link to={`/detalle/${pro.id}`}>
      <button className="btn btn-outline-primary btn-block">
        DETALLE PRODUCTO
      </button>
      </Link>
      
    
    </div>



                 
                 
                 
                  </div>
       )}
      
 </div>
 
  );
      
}
export default ItemContainers
