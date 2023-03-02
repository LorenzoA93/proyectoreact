import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(``)
            .then(response => response.json())
            .then(dataJson => setItem(dataJson))
    }, [id])

    return (
        <>
            <di className='itemDetailContainer'>
                <img className='itemImg' src={item?.image} alt={item?.title} />
                <div className='itemInfo'>
                    <h2>{item?.title}</h2>
                    <p>{item?.description}</p>
                    <h3>${item?.price}</h3>
                    <div>COMPRAR</div>
                </div >
            </di >
        </>
    )
}

export default ItemDetailContainer