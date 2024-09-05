import React, { useState } from 'react';
import IPhone from '../../types/Phone';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

interface CatalogItem {
    item: IPhone
}

export const CatalogItem: React.FC<CatalogItem> = ({item}) => {
    
    const dispatch = useDispatch()
    const [showCounter, setShowCounter] = useState(false)
    const [counterValue, setCounterValue] = useState(1)

    const sales = Math.floor( 100 - ((item.newPrice * 100) / item.oldPrice) )

    function showCounterHandler(): void{
        setShowCounter(prev => !prev)
        dispatch(cartActions.addToCart(item))
    }
    function incCount(){
        setCounterValue(prev => prev += 1)
    }
    function decCount(){
        if(counterValue === 1) {
            showCounterHandler()
            return
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
                    <img src={require(`../../assets/img/${item.img}`)} alt="" />
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
                        onClick={showCounterHandler}
                    >
                            <span>В корзину</span>
                            <svg className="icon" width="24px" height="28px"><use xlinkHref="#add-cart"></use></svg>
                    </button>

                    <div className={showCounter ? "counter" : "counter hidden"}>
                        <button 
                            className="counter__dec" 
                            type="button"
                            onClick={decCount}
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
                            onClick={incCount}
                        >
                            <svg className="icon" width="16px" height="16px"><use xlinkHref="#counter-inc"></use></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};