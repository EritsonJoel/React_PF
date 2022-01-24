import { createContext, useState} from "react"; //es para crear el Context
import React from 'react'

//Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React,
//sin necesidad de utilizar Props

export const CartContext = createContext([]) //inicia con Array Vacio


 
 function CartContextProvider({children}) {   
      /*es una Props : que me va a retornar todos los componentes hijos */


      const [cartList, SetCartList] = useState([]) //creo un estado 
 
   

      const agregarProducto = (item) =>{  //esta funcion me guardará el producto, en u array
        const index = cartList.findIndex(i => i.id === item.id)//pos    -1 //me encuentra la posicion del elemento en el nuevo array
  
        if (index > -1) { //if index'elemento' >=1 :
          const oldQy = cartList[index].cantidad// guardo el elemento[index] el unico elemento , mas su cantidad
          
          cartList.splice(index, 1)  //guarda el unico elemento 
          SetCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy}])
        } else {
          SetCartList([...cartList, {...item, cantidad: item.cantidad}])
        }
        
       
     
      }


      // PARA QUE AUMENTE Y DISMINUYE CON BOTONES + -

      //============



      const vaciarcarrito=()=>{
        SetCartList([]) //le paso el estado en donde se guarda el array , y lo dejo vacio, pasandole un array vacio
    }



    //FUNCION PARA EL PRECIO TOTAL DE PRODUCTOS
  
    const precioTotal =() =>{
      return  cartList.reduce((acum , prod) => acum + prod.precio * prod.cantidad, 0)
  } 




   // FUNCION PARA CONTAR LOS ITEMS
  const contarItem = () =>{
    return cartList.reduce((acumulador , pro)=> acumulador + pro.cantidad, 0)
  }


  const eliminarproducto = () =>{
    
 
    
  }

     return (
         <div>      {/*retornar e */}

             <CartContext.Provider value={{   

                cartList,
             
                agregarProducto,
                vaciarcarrito,
               precioTotal,
                contarItem,
                eliminarproducto,
            

             }}>
          
              {children}  
             </CartContext.Provider>             
         </div>
     )
 }

 
 export default CartContextProvider
 