import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemListContainer = (prop) => {

    const { categoryId } = useParams()
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        fetch(``)
            .then(response => response.json())
            .then(dataJson => setItemList(dataJson))
    }, [categoryId])

    return (
        <>
            {
                prop.greeting !== undefined ?
                    <h2 className='greeting'>{prop.greeting}</h2>
                    :
                    <ul className='items'>
                        {
                            itemList?.map(item =>
                                <li key={item.id}>
                                    <img src={item.image} alt="" />
                                    <h3>{item.title}</h3>
                                    <h4>${item.price}</h4>
                                    <Link to={`/item/${item.id}`}>VER DETALLES</Link>
                                </li>
                            )
                        }
                    </ul>
            }
        </>
    )
}
export default ItemListContainer