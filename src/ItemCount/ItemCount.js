import React, { useState } from 'react'


function ItemCount({stock = 10 , onAdd}) {


    const [count , SetCount] = useState(1)

    const sumar = () =>{  
        if(count < stock )
         SetCount(count + 1)
    }


    const restar =() =>{
       
        SetCount(count - 1)
    }




    return (
        <div>
            
            <button onClick={sumar}>+</button>
              {count}
            <button onClick={restar}>-</button>
        </div>
    )
}

export default ItemCount
