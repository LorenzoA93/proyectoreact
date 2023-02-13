import React from 'react'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import NavBar from './NavBar/NavBar'

const Landing = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenido a nuestra tienda virtual"/>
    </>
  )
}

export default Landing