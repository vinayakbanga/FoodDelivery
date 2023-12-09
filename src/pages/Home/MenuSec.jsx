import React from 'react'
import Itemcard from '../../Components/Itemcard'


const menuitem={
  "_id":{"$oid":"5eee651f739f8c674fd736ee"},
  "name":"Aloo Tikki Burger",
  "image":"burger-3.png",
  "price":"60","type":"veg",
  "category":"burger"
  }
const MenuSec = ({items}) => {

 

  
  return (
    <section className='mx-auto max-w-7xl my-7 py-8 px-2 lg:px-2   '>
        <h1 class=" text-2xl md:text-5xl heading font-semibold mb-8 text-center">Menu</h1>
        <h1 class=" text-2xl -md:text-5xl heading font-bold mb-8 text-center">Burger</h1>
        <div className='flex gap-5 md:gap-2 flex-wrap items-center  justify-evenly'>
          {items && items.map(item =>(

        <Itemcard menuitem={item}/>
          ))}
        {/* <Itemcard menuitem={menuitem}/>
        <Itemcard menuitem={menuitem}/>
        <Itemcard menuitem={menuitem}/>
        <Itemcard menuitem={menuitem}/>
        <Itemcard menuitem={menuitem}/>
        <Itemcard menuitem={menuitem}/>
        <Itemcard menuitem={menuitem}/>
        <Itemcard menuitem={menuitem}/>
        <Itemcard menuitem={menuitem}/>
         */}
            

        </div>

         
    </section>
  )
}

export default MenuSec