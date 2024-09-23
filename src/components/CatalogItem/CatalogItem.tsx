import { Link, useLocation, useMatch, useMatches, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useActions } from "../../hooks/index"
import { useSales } from '../../hooks';
import { IProduct } from '../../types';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AddToButton } from '../../ui';
import { stat } from 'fs';

type CatalogItemProps = {
    product: IProduct
}

export const CatalogItem = ({ product }: CatalogItemProps ) => {

    const cart  = useAppSelector( state => state.cart)
    const favorites  = useAppSelector( state => state.favorites)
    const [ counterValue, setCounterValue ] = useState(0)
    const [ isFavorites, setIsFavorites ] = useState(false)
    const { addProduct, removeProduct, toggleFavorite } = useActions()

    useEffect( () => {
        const isFavorites: boolean = favorites.some(item => item.id === product.id)
        setIsFavorites(isFavorites)
    },[favorites, product.id])

    useEffect( () => {
        const productIndex: number = cart.findIndex(item => item.product.id === product.id)
        const countItemInCart: number = cart[productIndex]?.productCount
        setCounterValue(countItemInCart)
    },[cart, product.id])

    const sales = useSales(product.newPrice, product.oldPrice)


    return (
        <div className='catalog-item'>
            {product.label ? <div className='catalog-item__label'>{product.label}</div> : null}
            <div className='catalog-item__add-to'>
                <button 
                    type="button"
                    className={isFavorites ? "add-to active" : "add-to" }
                    onClick={() => {toggleFavorite(product)}}
                >
                    <svg className="icon-fill" width="28px" height="24px"><use xlinkHref="#fav"></use></svg>
                </button>
                <button className="add-to" type="button">
                    <svg className="icon" width="28px" height="24px"><use xlinkHref="#compare"></use></svg>
                </button>
                {/* <AddToButton type={"favorites"} size={}/> */}
            </div>
            <div className='catalog-item__img'>
                <Link to={`/categories/${product.category}/${product.id}`}>
                    <img src={product.img[0]} alt="" />
                </Link>
            </div>
            <Link to={`/products/${product.id}`}>
                <h2 className='catalog-item__title' title={product.name}>{product.name}</h2>
            </Link>

            <div className="catalog-item__order">
                <div className="catalog-item__price price">
                    <div className="price__old"><s>{`${product.oldPrice} ₽`}</s><span>{`${sales}%`}</span></div>
                    <div className="price__new">{`${product.newPrice} ₽`}</div>
                </div>

                <div className="catalog-item__buy js-buy">
                    <button 
                        className={ counterValue ? "add-cart hidden" : "add-cart"} 
                        type="button"
                        onClick={() => addProduct(product)}
                    >
                            <span>В корзину</span>
                            <svg className="icon" width="24px" height="28px"><use xlinkHref="#add-cart"></use></svg>
                    </button>

                    <div className={ counterValue ? "counter" : "counter hidden"}>
                        <button 
                            className="counter__dec" 
                            type="button"
                            onClick={() => removeProduct(product)}
                        >
                            <svg className="icon" width="16px" height="4px"><use xlinkHref="#counter-dec"></use></svg>
                        </button>
                        <input 
                            type="text" 
                            value={counterValue} 
                            readOnly
                        />
                        <button 
                            className="counter__inc" 
                            type="button"
                            onClick={() => addProduct(product)}
                        >
                            <svg className="icon" width="16px" height="16px"><use xlinkHref="#counter-inc"></use></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};