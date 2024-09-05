import React, { useEffect, useState } from 'react';
import { getEndpoints } from '../../middleware/get-api';
import { Link, useLocation } from 'react-router-dom';

type Category = {
    id: number,
    name: string,
    img: string,
    url: string
}

const Categories = () => {

    const [categories, setCategories] = useState([])
    const location = useLocation()
    const isMainPage = location.pathname === '/'

    useEffect( () => {
        getEndpoints('categories')
            .then( data => setCategories(data))
    },[])

    return (
        <div className='categories'>
            <div className='container'>
                <ul className='categories__tile'>
                    {categories.map((item: Category) => {
                        return (
                            <li key={item.id} className='category-item'>
                                <Link to={ isMainPage ? `categories/${item.id}` : `${item.id}`} className='category-item__link'>
                                    <h2 className='category-item__title'>{item.name}</h2>
                                    <img src={require(`../../assets/img/${item.img}`)} className='category-item__pic' alt="" />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Categories;