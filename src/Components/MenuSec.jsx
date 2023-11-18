import React from 'react'
import Itemcard from './Itemcard'



const MenuSec = () => {
  return (
    <section className='mx-auto max-w-7xl my-7 py-8 px-2 lg:px-2   '>
        <h1 class=" text-2xl md:text-5xl heading font-semibold mb-8 text-center">Menu</h1>
        <h1 class=" text-2xl -md:text-5xl heading font-bold mb-8 text-center">Burger</h1>
        <div className='flex gap-5 md:gap-2 flex-wrap items-center  justify-evenly'>
        <Itemcard/>
        <Itemcard/>
        <Itemcard/>
        <Itemcard/>
        <Itemcard/>
        <Itemcard/>
        <Itemcard/>
            

        </div>

         
    </section>
  )
}

export default MenuSec