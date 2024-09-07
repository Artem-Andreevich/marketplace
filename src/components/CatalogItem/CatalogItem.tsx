import React, { useState } from 'react';
import { IProduct } from '../../types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import { useSales } from '../../hooks';

type CatalogItemProps = {
    item: IProduct
}

export const CatalogItem = ({item}: CatalogItemProps) => {

    const dispatch = useDispatch()
	const countItemInCart: number = useSelector( ({ cart }: any) => cart.products.filter((product: IProduct) => product.id === item.id).length)
    const [showCounter, setShowCounter] = useState(!!countItemInCart)
    const [counterValue, setCounterValue] = useState(countItemInCart)

    const sales = useSales(item.newPrice, item.oldPrice)

    function addToCartHandler(): void{
        dispatch(cartActions.addToCart(item))
        if(counterValue === 0) {
            setShowCounter(prev => !prev)
        }
        setCounterValue(prev => prev += 1)
    }
    function removeFromCartHandler(){
        dispatch(cartActions.removeFromCart(item))
        if(counterValue === 1){
            setShowCounter(prev => !prev)
        }
        setCounterValue(prev => prev -= 1)
    }


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
                        className={ showCounter ? "add-cart hidden" : "add-cart"} 
                        type="button"
                        onClick={addToCartHandler}
                    >
                            <span>В корзину</span>
                            <svg className="icon" width="24px" height="28px"><use xlinkHref="#add-cart"></use></svg>
                    </button>

                    <div className={showCounter ? "counter" : "counter hidden"}>
                        <button 
                            className="counter__dec" 
                            type="button"
                            onClick={removeFromCartHandler}
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
                            onClick={addToCartHandler}
                        >
                            <svg className="icon" width="16px" height="16px"><use xlinkHref="#counter-inc"></use></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};