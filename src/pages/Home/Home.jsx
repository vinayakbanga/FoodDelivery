import React from 'react'

import Header from './Header'
import MenuSec from './MenuSec'
import Metadata from '../Metadata'
import { getItems } from '../../Actions/menuAction'
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react'


const Home = () => {

  const dispatch =useDispatch();
  const {loading,error,items,itemsCount}=useSelector(state=>state.items)


  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])
  

  return (
    <>
    <Metadata title="HomePage" />
    
    <Header></Header>
    <MenuSec items={items}/>
    </>
  )
}

export default Home