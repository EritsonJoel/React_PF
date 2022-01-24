

const  productos = [

    {id: 1 , nombre: 'Mancuernas Comba Lastes  7.5 kilos por cada una ', img:'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/06/23/15929250990530.jpg', categoria:'pesas', precio: 100},
    {id: 2 , nombre: 'Mancuernas PROSHAPE 20 Kilos Por cada una Ajustable', img:'https://home.ripley.com.pe/Attachment/WOP_5/2022279723853/2022279723853-3.jpg', categoria:'pesas' , precio: 100 },
    {id: 3 , nombre: 'Pack 4 Bandas Elásticas Resistentes ', img:'https://i.linio.com/p/18277ee5ca54821c87a14103285e34e4-catalog.webp', categoria:'ligas',precio: 50, },
    {id: 4 , nombre: 'Set 5 Ligas Elásticas Resistentes', img:'https://i.linio.com/p/4fc76d083f53e10b552f0da4b304415a-catalog.webp', categoria:'ligas', precio: 80},
    {id: 5 , nombre: 'Barra Romana', img:'https://http2.mlstatic.com/D_NQ_NP_674218-MLA46710242538_072021-O.jpg', categoria:'barras', precio: 100},
    {id: 6 , nombre: 'Barra Z', img:'https://http2.mlstatic.com/D_NQ_NP_714468-MPE42898718072_072020-O.jpg', categoria:'barras', precio: 100}
   
   ]
   
   
   export  const getProductos = new Promise((aceptado, rechazado) =>{
     
     setTimeout(() =>{
       aceptado(productos)
     }, 3000)
   })
   