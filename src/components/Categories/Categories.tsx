import { Link, useLocation } from 'react-router-dom';
import { ICategories } from "../../types/Categories"
import { Loader } from '../Loader';
import { useGetCategoriesQuery } from '../../store/api/api';


export const Categories = () => {

    const location = useLocation()
    const isMainPage = location.pathname === '/'
    const { isLoading, data: categories} = useGetCategoriesQuery()

    return (
        <div className='categories'>
            <div className='container'>
                {isLoading ? 
                    <Loader /> :
                    <ul className='categories__tile'>
                        {categories.map((item: ICategories) => {
                            return (
                                <li key={item.id} className='category-item'>
                                    <Link to={ isMainPage ? `categories/${item.id}` : `${item.id}`} className='category-item__link'>
                                        <h2 className='category-item__title'>{item.name}</h2>
                                        <img src={item.img} className='category-item__pic' alt="" />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>
        </div>
    );
};