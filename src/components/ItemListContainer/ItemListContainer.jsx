import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemListContainer = (prop) => {

    const { categoryId } = useParams()
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
            .then(res => res.json())
            .then(data => setItemList(data))
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
                                    <h3>{item.title}</h3>
                                    <img src={item.thumbnail} alt="" />
                                    <h4>${item.price}</h4>
                                    <Link to={ `/item/${item.id}`}>VER DETALLES</Link>
                                </li>
                            )
                        }
                    </ul>
            }
        </>
    )
}
export default ItemListContainer