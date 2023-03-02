import React from 'react';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';

const Landing = () => {
  const style={
    backgroundColor:"black",
    color:"white"
  }
  return (
    <>
    <ItemListContainer greeting="Bienvenido a nuestra tienda virtual" style={style}/>
    </>
  )
}

export default Landing