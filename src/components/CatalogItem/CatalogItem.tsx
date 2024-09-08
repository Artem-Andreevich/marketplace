import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from "../../hooks/index"
import { useSales } from '../../hooks';
import { IProduct } from '../../types';

type CatalogItemProps = {
    item: IProduct
}

export const CatalogItem = ({ item }: CatalogItemProps ) => {

    const { cart }: any = useSelector( cart => cart)
    const [ counterValue, setCounterValue ] = useState(0)
    const { addProduct, removeProduct }: any = useActions()
    const sales = useSales(item.newPrice, item.oldPrice)

    useEffect( () => {
        const productIndex: number = cart.findIndex((cart: any) => cart.product.id === item.id)
        const countItemInCart: number = cart[productIndex]?.productCount
        setCounterValue(countItemInCart)
    },[cart, item.id])

    return (
        <div className='catalog-item'>
            <div className='catalog-item__label'>{item.label}</div>
            <div className='catalog-item__add-to'>
                <button className="add-to active" type="button">
                    <svg className="icon-fill" width="28px" height="24px"><use xlinkHref="#fav"></use></svg>
                </button>
                <button className="add-to" type="button">
                    <svg className="icon" width="28px" height="24px"><use xlinkHref="#compare"></use></svg>
                </button>
            </div>
            <div className='catalog-item__img'>
                <Link to={`/product/${item.id}`}>
                    <img src={item.img[0]} alt="" />
                </Link>
            </div>
            <h2 className='catalog-item__title'>{item.name}</h2>

            <div className="catalog-item__order">
                <div className="catalog-item__price price">
                    <div className="price__old"><s>{`${item.oldPrice} ₽`}</s><span>{`${sales}%`}</span></div>
                    <div className="price__new">{`${item.newPrice} ₽`}</div>
                </div>

                <div className="catalog-item__buy js-buy">
                    <button 
                        className={ counterValue ? "add-cart hidden" : "add-cart"} 
                        type="button"
                        onClick={() => addProduct(item)}
                    >
                            <span>В корзину</span>
                            <svg className="icon" width="24px" height="28px"><use xlinkHref="#add-cart"></use></svg>
                    </button>

                    <div className={ counterValue ? "counter" : "counter hidden"}>
                        <button 
                            className="counter__dec" 
                            type="button"
                            onClick={() => removeProduct(item)}
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
                            onClick={() => addProduct(item)}
                        >
                            <svg className="icon" width="16px" height="16px"><use xlinkHref="#counter-inc"></use></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};