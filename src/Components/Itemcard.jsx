const menuitem={
    "_id":{"$oid":"5eee651f739f8c674fd736ee"},
    "name":"Aloo Tikki Burger",
    "image":"burger-3.png",
    "price":"60","type":"veg",
    "category":"burger"
    }
    
    const Itemcard = () => {
      return (
        <>
        <div className=' hidden md:flex border-2 border-slate-200 shadow-gray-200 shadow mb-3  rounded-lg max-w-sm w-1/4   flex-col items-center justify-center' >
                <img 
                src="https://github.com/vinayakbanga/FoodDelivery/blob/main/src/img1/Burger1.png?raw=true"/>
                <h2>{menuitem.name}</h2>
                <span class="size py-1 px-4 bg-gray-200 rounded-full uppercase text-xs ">{menuitem.type}</span>
                <div className="flex items-center px-5 gap-5 justify-around w-full py-2">
                                 <span class="font-bold text-lg">₹{menuitem.price}</span>
                                 <button  class=" border-2 text-orange-500 border-orange-500 py-1 px-4 rounded-full flex items-center  font-semibold hover:bg-orange-500 hover:ease-in hover:text-white transition-colors">
                                     <span>+</span>
                                     <span class="ml-4">Add</span>
                                 </button>
                 </div>


            </div>
            <div className="md:hidden border-2 border-orange-400 rounded-3xl flex items-center justify-between w-full px-5">
                <div>
                <img 
                className="w-20"
                src="https://github.com/vinayakbanga/FoodDelivery/blob/main/src/img1/Burger1.png?raw=true"/>

                </div>
                <div className="flex flex-col gap-1 items-center">
                <h2>{menuitem.name}</h2>
                <span class="size py-1 px-4 bg-gray-200 rounded-full uppercase text-xs ">{menuitem.type}</span>

                </div>
                <div className="flex items-center gap-2">
                <span class="font-medium text-sm">₹{menuitem.price}</span>
                                 <button  class=" border-2 text-xs text-orange-500 border-orange-500 py-1 px-3 rounded-full flex items-center  font-medium hover:bg-orange-500 hover:ease-in hover:text-white transition-colors">
                                     <span>+</span>
                                     <span class="ml-4">Add</span>
                                 </button>

                </div>
            </div>




            </>
            
       
      )
    }
    
    export default Itemcard