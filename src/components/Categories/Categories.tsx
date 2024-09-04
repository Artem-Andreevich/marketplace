import React, { useEffect, useState } from 'react';
import { getCategories } from '../../middleware/get-api';
import { Link } from 'react-router-dom';

type Category = {
    id: number,
    name: string,
    img: string,
    url: string
}

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect( () => {
        getCategories()
            .then( data => setCategories(data))
    },[])

    return (
        <div className='categories'>
            <div className='container'>
                <ul className='categories__tile'>
                    {categories.map((item: Category) => {
                        return (
                            <li key={item.id} className='category-item'>
                                <Link to={`/categories/${item.url}`} className='category-item__link'>
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