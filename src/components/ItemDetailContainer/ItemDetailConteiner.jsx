import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';                              

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])    

    return (
        <div className='itemDetailContainer'>
            <div className='itemInfo'>
                <h2>{item?.title}</h2>
                <p>{item?.description}</p>
                <img className='itemImg' src={item?.image} alt={item?.title} />
                <h3>${item?.price}</h3>
                <div>COMPRAR</div>
            </div >
        </div >
    )
}

export default ItemDetailContainer