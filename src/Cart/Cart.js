import React from 'react'
import { useContext, useState } from 'react'
import '../Detail.css'
import { CartContext } from '../Context/CartContext'


function Cart() {

  const {cartList,precioTotal, vaciarcarrito, eliminarproducto, sumar, restar} = useContext(CartContext)

 
   
    return (  
        <div>
                   <table className='table'>
                   <tr className='table_container'>
                   <td>IMAGEN</td>
                  <td>NOMBRE</td>
                   <td>DESCRIPCION</td>
                    </tr>
                    {cartList.map(prod =>  <div prod={prod.id}>
                       <tr className='table_contenido'>
                      
                                      
                                        <td>
                                          <img src={prod.img} className='imagenCart' alt='imagen'/>
                                         </td>
                                            <th>Nombre:{prod.nombre}</th>
                                            <th></th>
                                            <th>Categoria:{prod.categoria}</th>
                                            <th>Precio: ${prod.precio}</th>
                                            <th>Cantidad:{prod.cantidad}</th>
                                            <button  onClick={()=> eliminarproducto()}>X</button> 
                                            <th></th>
                                        
                                    <tbody></tbody>
                                    </tr>
                                  

                     </div>)}
                   

                   </table>
                   <h1>PRECIO TOTAL $: {precioTotal()}</h1>

                   <button onClick={ ()=> vaciarcarrito()} className='button-vaciarcompra'>VACIAR CARRITO</button><br>
                   </br>
                   <button className='button-finalizarcompra'>FINALIZAR COMPRA</button>
          

     
                
        
        </div>
    )
}

export default Cart
